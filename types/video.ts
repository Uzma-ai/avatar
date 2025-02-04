
export interface Video {
  id: string
  title: string
  category: string
  times: number
  publish: string
  views: number
  likes: number
  comments: number
  publishDate: string
  thumbnail: string
  status: "published" | "draft"
  videoUrl: string | undefined
}

export interface VideoFormData {
  title: string
  description: string
  tags: string
  contentType: string
  language: string
  region: string
}

