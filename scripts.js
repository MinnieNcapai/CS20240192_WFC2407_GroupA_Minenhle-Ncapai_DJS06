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