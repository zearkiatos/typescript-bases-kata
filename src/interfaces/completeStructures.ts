interface Client {
  name: string;
  age?: number;
  address: Address;
}

interface Address {
  id: number;
  zip: string;
  city: string;
}

export { Client };
