//push:adds elemnet at the back of an array
let fruits = ["pawpaw","mango","orange"];
fruits.push("pineApple")
console.log(fruits)

//pop:removes the last element in an array
let profile = ["ope","boy",`12yrs`]
profile.pop()
console.log(profile)



//shift:removes first element of an array
let cars = [670,"BMW","mercerdes","camry"]
cars.shift()
console.log(cars)



//unshfit:adds a new element at the start of an array
let fishes = ["tilapia","sardines"]
fishes.unshift("sharks")
console.log(fishes)

//reverse:rearrange the elements backwards
let colors = ["blue","green","white","orange"]
colors.reverse()
console.log(colors)

//sorts:sorts the elements as strings in alphabetical and ascending order
let names = ["jamiu","agba","zainab","kola","itunu"]
names.sort()
console.log(names)


//concat:merges two arrays together
let brand1 = ["gucci","versace","luis vutton"]
let brand2 =["fila",`D&G`,"TOMMY HILFGER"]
 let designer = brand1.concat(brand2)
console.log(designer)



 //includes:check if the item called is in that array
  let boys = ["usman","kuwait","lekan","ahmid"]
console.log(boys.includes("kuwait"))


  //indexOf:shows the postion of the item in the array
  let age = [`34yrs`,`9yrs`,`67yrs`,`90yrs`]
console.log(age.indexOf(`9yrs`))

//slice:slices out a piece of an array

//slicing from the end
  let num = [20,30,16,37,10,23]
  console.log(num.slice(-2))

  //slicing from the start
  let nums = [39,7,56,24,90]
  console.log(nums.slice(3))

  //splice:adds/remove items from an array
  //adding new item
  let drinks = ["fanta","coke","moutainDew",`5alive`]
  drinks.splice(2,0,`7up`,"malt")//at postion two add this items
  console.log(drinks)

  //removing item
  let size = ["small","large","medium","extraSmall","extraLarge"]
  size.splice(2,2)//at postion two remove two items
  console.log(size)