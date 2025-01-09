'use client'

import { useState, useEffect } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Country = {
  name: string
  code: string
  phoneCode: string
}

type CountryApiResponse = {
  name: {
    common: string
  }
  cca2: string
  idd: {
    root: string
    suffixes?: string[]
  }
}

export default function ContactNumber() {
  const [countries, setCountries] = useState<Country[]>([])
  const [selectedCountry, setSelectedCountry] = useState<string>('MY') // Set default to Malaysia (MY)
  const [phoneNumber, setPhoneNumber] = useState<string>('')

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all')
        if (!response.ok) {
          throw new Error('Failed to fetch countries')
        }
        const data: CountryApiResponse[] = await response.json()
        const countryList = data
          .map((country) => ({
            name: country.name.common,
            code: country.cca2,
            phoneCode: country.idd.root + (country.idd.suffixes?.[0] || ''),
          }))
          .sort((a, b) => a.name.localeCompare(b.name))
        setCountries(countryList)
      } catch (error) {
        console.error('Error fetching countries:', error)
        setCountries([])
      }
    }

    fetchCountries()
  }, [])

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value)
    setPhoneNumber('')
  }

  const selectedCountryData = countries.find(
    (country) => country.code === selectedCountry
  )

  return (
    <div className="flex flex-col flex-wrap items-start gap-2">
      <Label htmlFor="country" className="w-2/12 text-nowrap pt-1 mb-0">
        Phone Number
      </Label>
      <div className="relative flex items-center w-full gap-2">
        <Select value={selectedCountry} onValueChange={handleCountryChange}>
          <SelectTrigger className="w-[100px] bg-gray-200 text-black border rounded-md z-10">
            <SelectValue placeholder="Select Country">
              {selectedCountry
                ? `${selectedCountryData?.code} (${selectedCountryData?.phoneCode})`
                : 'Select Country'}
            </SelectValue>
          </SelectTrigger>
         
          <SelectContent className="w-3/4 max-h-60 rounded-md">
            {countries.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                {country.name} ({country.phoneCode})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          id="contactNumber"
          type="tel"
          value={phoneNumber}
          onChange={(e) => {
            const value = e.target.value
            if (/^\d{0,10}$/.test(value)) {
              setPhoneNumber(value)
            }
          }}
          className="w-full border rounded-md p-2 h-10"
        />
      </div>
    </div>
  )
}
