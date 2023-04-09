//_________________CASE 1 _____________________

const fruits = [
	{
		fruitId: 1,
		fruitName: "Apel",
		fruitType: "IMPORT",
		stock: 10,
	},
	{
		fruitId: 2,
		fruitName: "Kurma",
		fruitType: "IMPORT",
		stock: 20,
	},
	{
		fruitId: 3,
		fruitName: "apel",
		fruitType: "IMPORT",
		stock: 50,
	},
	{
		fruitId: 4,
		fruitName: "Manggis",
		fruitType: "LOCAL",
		stock: 100,
	},
	{
		fruitId: 5,
		fruitName: "Jeruk Bali",
		fruitType: "LOCAL",
		stock: 10,
	},
	{
		fruitId: 5,
		fruitName: "KURMA",
		fruitType: "IMPORT",
		stock: 20,
	},
	{
		fruitId: 5,
		fruitName: "Salak",
		fruitType: "LOCAL",
		stock: 150,
	},
];

// Pertanyaan 1: Buah apa saja yang dimiliki Andi? (fruitName)
const allFruitNames = fruits.map((fruit) => fruit.fruitName.toLocaleLowerCase());
const uniqueFruitNames = [...new Set(allFruitNames)];

console.log("Buah yang dimiliki oleh Andi adalah: ");
console.log(uniqueFruitNames);

// Pertanyaan 2: Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?
const importFruits = fruits.filter((fruit) => fruit.fruitType === "IMPORT");
const localFruits = fruits.filter((fruit) => fruit.fruitType === "LOCAL");

const importFruitNames = [...new Set(importFruits.map((fruit) => fruit.fruitName))];
const localFruitNames = [...new Set(localFruits.map((fruit) => fruit.fruitName))];

console.log("Jumlah wadah yang dibutuhkan adalah: ", importFruitNames.length + localFruitNames.length);
console.log("Buah yang ada di wadah buah import (IMPORT) adalah: ");
console.log(importFruitNames);
console.log("Buah yang ada di wadah buah lokal (LOCAL) adalah: ");
console.log(localFruitNames);

// Pertanyaan 3: Berapa total stock buah yang ada di masing-masing wadah?
const importTotalStock = importFruits.reduce((total, fruit) => total + fruit.stock, 0);
const localTotalStock = localFruits.reduce((total, fruit) => total + fruit.stock, 0);

console.log("Total stock buah di wadah buah import (IMPORT) adalah: ", importTotalStock);
console.log("Total stock buah di wadah buah lokal (LOCAL) adalah: ", localTotalStock);

//_____________________CASE 2______________________

type IComment = {
	commentId: number;
	commentContent: string;
	replies?: IComment[];
};

const comments: IComment[] = [
	{
		commentId: 1,
		commentContent: "Hai",
		replies: [
			{
				commentId: 11,
				commentContent: "Hai juga",
				replies: [
					{
						commentId: 111,
						commentContent: "Haai juga hai jugaa",
					},
					{
						commentId: 112,
						commentContent: "Haai juga hai jugaa",
					},
				],
			},
			{
				commentId: 12,
				commentContent: "Hai juga",
				replies: [
					{
						commentId: 121,
						commentContent: "Haai juga hai jugaa",
					},
				],
			},
		],
	},
	{
		commentId: 2,
		commentContent: "Halooo",
	},
];

// Fungsi untuk menghitung total komentar
const countTotalComments = (comments: IComment[]): number => {
	let total = 0;
	for (const comment of comments) {
		total++;
		if (comment.replies) {
			total += countTotalComments(comment.replies);
		}
	}
	return total;
};

// Menghitung total komentar
const totalComments = countTotalComments(comments);
console.log("Total komentar adalah:", totalComments, "komentar.");
