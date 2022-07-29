import { ProjectLink } from './ProjectLink'

export interface ProjectData {
    id: string
    date: string
    thumbnailUrl: string
    metaImageUrl: string
    imagesUrls: string[]
    youtubeVideoId?: string
    title: string
    subtitle: string
    description: string[]
    implementationDetails: string[]
    tags: string[]
    links?: ProjectLink[]
    gitHubUrl?: string
    appleAppStoreUrl?: string
    googlePlayStoreUrl?: string
}
