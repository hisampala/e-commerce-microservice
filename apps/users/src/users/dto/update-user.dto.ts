import { Address, DeliveryAddress } from "datastore/users";

export class UpdateUserDto {
  id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  address: Address;
  deliveryAddress: DeliveryAddress;
}
