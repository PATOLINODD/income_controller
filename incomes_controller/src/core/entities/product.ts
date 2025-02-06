import { ValidObj } from "../../utils";

export class Product {
	constructor(
		public name: string,
		public category: string,
		public date: Date,
		public price: number,
		public quantity: number
	) {
		this.date = new Date();
	}

	set _name(name: string) {
		this.name = name;
	}
	get _name() {
		return this.name;
	}

	set _category(category: string) {
		this.category = category;
	}
	get _category() {
		return this.category;
	}

	set _date(date: Date) {
		this.date = date;
	}
	get _date() {
		return this.date;
	}

	set _price(price: number) {
		this.price = price;
	}
	get _price() {
		return this.price;
	}
	
	set _quantity(quantity: number) {
		this.quantity = quantity;
	}
	get _quantity() {
		return this.quantity;
	}

	isValidProduct(): boolean {
		return ValidObj.isObjEmpty(this);
	}
}