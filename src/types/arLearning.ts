
export type ComponentInfo = {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  specifications?: string[];
  tips?: string[];
}

export type ComponentCategory = {
  id: string;
  name: string;
  items: ComponentInfo[];
}
