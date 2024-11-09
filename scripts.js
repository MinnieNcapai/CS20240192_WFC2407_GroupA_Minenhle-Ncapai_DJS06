// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Task: Use forEach to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)".
// Logging each name and province
console.log ("Names:", names)
console.log ("Provinces:", provinces)
// Logging each name with a matching province
provinces.forEach((province,index) => {
  console.log("Names with matching Provonces:",`${names[index]} (${province})`)
})

//Task:  Use map to create a new array of province names in all uppercase. Log the new array to the console.
//Uppercase Transformation
  const uppercaseProvinces = provinces.map(province => province.toUpperCase())
  console.log("Uppercased Province Names:", uppercaseProvinces);

//Task: Create a new array using map that contains the length of each name.
//Name Lengths
const nameLengths = names.map(name => name.length);
console.log("Name Lengths:", nameLengths);

//Task: Use sort to alphabetically sort the provinces.
//Sorting alphabetically 
const sortedProvinces = provinces.sort();
console.log("Sorted Provinces:", sortedProvinces);

//Task: Use filter to remove provinces containing "Cape". Log the count of remaining provinces.
//Filtering Cape: 
const filteredProvinces= provinces.filter(province => !province.includes('Cape'));
console.log("Provinces without the word Cape:", filteredProvinces.length);

//Task:Create a boolean array using map and some to determine if a name contains the letter 'S'.
//Finding 'S'
const namesWithS = names.map(name => name.includes('S'));
console.log("Names containing 'S':" ,namesWithS);

//Task:Use reduce to transform the names array into an object mapping names to their respective provinces.
//Creating Object Mapping
const nameToProvince = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
  }, {});
 console.log("Mapping Names to Provinces:", nameToProvince)

//Advances Excercises:

//Log Products: Iterate over the products array, logging each product name.
 //Logging Products
console.log ("Product Names:", products)

// Filter by Name Length: Filter out products with names longer than 5 characters.
const filteredProducts = products.filter(product => product.product.length <= 5)
console.log("Filtered Products:", filteredProducts)

//Price Manipulation: Filter out products without prices, convert string prices to numbers, and calculate the total price using reduce.
const totalPrice = products.reduce ((acc,products) => {
 if (products.price && products.price.toString().trim() !== '') {
    return acc + Number (products.price);
    }
    return acc ;
   }, 0);
console.log("Total Price:", totalPrice);
  
//Concatenate Product Names: Use reduce to concatenate all product names into a single string.
const concatenatedProductNames = products.reduce((acc, product) => acc + product.product + ' ', '').trim();

//Find Extremes in Prices: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
const priceExtremes = products.reduce((acc, product) => {
  if (product.price && product.price.toString().trim() !== '') {
    const price = Number(product.price);
    if (price > acc.highest) acc.highest = price;
    if (price < acc.lowest) acc.lowest = price;
    }
    return acc;
  }, { highest: -Infinity, lowest: Infinity });
    
const priceString = `Highest: ${priceExtremes.highest}. Lowest: ${priceExtremes.lowest}.`;
console.log(priceString);
 


