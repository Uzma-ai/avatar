"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface AddressDialogProps {
  currentAddress: string;
  onAddressChange: (newAddress: string) => void;
}

export function AddressDialog({
  currentAddress,
  onAddressChange,
}: AddressDialogProps) {
  const [address, setAddress] = useState(currentAddress);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddressChange(address);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="h-auto p-0 text-secondarycolor font-semibold text-sm underline"
        >
          Change address
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[350px] dialog-content rounded-md">
        <DialogHeader>
          <DialogTitle>Change Delivery Address</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="address">Delivery Address</Label>
            <Textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="h-24"
            />
          </div>
          <Button className="bg-secondarycolor" type="submit">Save Address</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
