
export class Product {
	constructor(
		public name: string, 
		public category: string, 
		public date: Date, 
		public price: number, 
		public quantity: number
		)
	{
		this.date = new Date();
	}
}