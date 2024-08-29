export type MusicProviderType = "spotify" | "appleMusic" | "deezer";

export interface MusicProviderData {
  id: number;
  providerName: MusicProviderType;
  accessToken: string;
  refreshToken?: string;
  connectedAt: Date;
}