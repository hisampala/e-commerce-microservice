class Address {
  address: string;
  subdistrict: string;
  district: string;
  province: string;
  post_code: string;
}
class DeliveryAddress {
  address: string;
  subdistrict: string;
  district: string;
  province: string;
  post_code: string;
}
export class ItemCustomer {
  id: string;
  name: string;
  Address: Address;
  DeliveryAddress: DeliveryAddress;
}
