import { Address, DeliveryAddress } from "datastore/users";

export class CreateUserDto {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  address: Address;
  deliveryAddress: DeliveryAddress;
}
