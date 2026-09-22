import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.mentecoraje.ia",
  appName: "Mente Coraje IA",
  webDir: "public",
  server: {
    url: "https://mente-coraje-ia.lovable.app",
    cleartext: false,
  },
  android: {
    backgroundColor: "#0b1a3a",
  },
};

export default config;