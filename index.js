// const laptop = {brand:"Lenovo" , ram:16, storage:512 };
//  console.log(Object.keys(laptop));

// const weather = {city:"Darkhan", temperature: 12, isSunny:true};
// console.log(Object.values(weather));

// const phone = {brand : "Samsung", model: "Galaxy", storage:256, color: "Хар"};
// console.log(Object.keys(phone).length);

// const settings = {}
// if (Object.keys(settings).length){
//     console.log("Тохиргоо оруулсан")
// }else {
//     console.log("Тохиргоо оруулаагүй")
// }

// const sizes = ["S", "M", "L"];
//  console.log(sizes.indexOf("XL"));

// const steps = ["Эхлэл", "Дунд", "Төгсгөл"];
// steps.reverse();
// console.log(steps);

// const tags =  "спорт,хөгжим,аялал";
// console.log( tags.split(","));

// const playlist = { name: "lumino", songs: ["Нар", "Салхи", "Бороо"] };
// const template = `${playlist.name} нэртэй жагсаалтад ${playlist.songs.length} дуу байна. Хоёр дахь дуу нь ${playlist.songs[1]}.`;
// console.log(template);

// const pets = [{name : "Банхар", type : "Нохой"} ,
//     {name : "Мими", type:"Муур"}];
//     console.log( `Нэр: ${pets[1].name}, төрөл: ${pets[1].type}.`)

// const classroom = { name : "10A",
//     teacher : { name :"Оюун", subject:"Математик."}}
//     const template = `${classroom.name}ангийн багш ${classroom.teacher.name}.Заадаг хичээл: ${classroom.teacher.subject}`;
//     console.log(template)

// const store = { branches:
//     [{ name : "Tuv", hours: ["09:00", "18:00"]},
//     { name: "Baruun" , hours : ["10:00", "20:00"] },
//     ],};
//     const b = store.branches[1];
//     console.log(`${b.name}салбар ${b.hours[1]}цагт хаана.`)

// const user = { email:"anu@example.com", password : "pass123", isBlocked :false};
// const  enteredEmail = "anu@example.com";
// const enteredPassword = "pass123";
// if (user.isBlocked) {
//     console.log("Хандах эрх хаагдсан"  )
// }else if ( enteredEmail === user.email && enteredPassword === user.password){
//     console.log("Амжилттай нэвтэрлээ")
// } else {
//     console.log( "И-мэйл эсвэл нууц үг буруу")
// }

// const user = {role: "editor", isActive :true};
// if(user.isActive ){
//     console.log("Эрх идэвхгүй");
// } else if ( user.role === "admin"){
//     console.log("Бүх мэдээллийг удирдана")
// } else if ( user.role === "editor"){
//     console.log("Мэдээлэл засна")
// } else {
//     console.log("Зөвхөн мэдээлэл үзнэ" )
// }

// const visitor = { age: 16, isStudent: true };
// const price = 12000;
// let ticketPrice;
// if (visitor.age < 12) {
//     visitor.ticketPrice = price * 0.5;
// } else if (visitor.isStudent){
//     visitor.ticketPrice = price * 0.75;
// } else {
//    visitors.ticketPrice = price;
// }
// console.log( visitor.ticketPrice);

// const order = { subtotal: 8000,  coupon:"SAVE10", couponUsed: false }
// if( order.couponUsed){
//     console.log( "Купон ашиглагдсан")
// }else if ( order.coupon ==="SAVE10" && order.subtotal >= 50000){
//     const toral = order.subtotal * 0.1;
//     order.couponUsed = true;
//     console.log(`Төлөх дүн ${total}, couponUsed нь ${order.couponUsed}`);
// } else {
//     console.log("Купон хэрэглэх боломжгүй")
// }

// const member = { name:"Номин", borrowedBooks:["Атлас", "Нууц арал"], hasOverdue:false };
// if (member.hasOverdue) {
//     console.log( "Хугацаа хэтэрсэн номтой тул зээлүүлэхгүй");
//   } else if (member.borrowedBooks.length < 3) {
//     member.borrowedBooks.push("Оддын тухай");
//     console.log( member.borrowedBooks);
//   } else {
//     console.log( "Зээлэх номын хязгаарт хүрсэн");
//   }

// const seats = ["Сул", "Захиалсан", "Сул"];
// const selectedIndex = 2;
// if (selectedIndex < 0 || selectedIndex >= seats.length) {
//     console.log( "Суудлын дугаар буруу");
//   } else if (seats[selectedIndex] === "Сул") {
//     seats[selectedIndex] = "Захиалсан";
//     console.log( seats);
//   } else {
//     console.log( "Энэ суудал захиалгатай");
//   }

// const seats = ["Сул", "Сул", "Захиалсан", "Сул"]
// if( seats[0]==="Сул" &&  seats[1]==="Сул"){
//     seats[0] =  "Захиалсан"
//     seats[1] =  "Захиалсан"
//     console.log( seats)
// } else {
//     console.log("Хоёр суудлыг хамт захиалах боломжгүй")
// }

// const  warehouseA = { stock:12};
// const  warehouseB = { stock: 5};
// const transferAmount = 4 ;
// if( transferAmount > 0 && transferAmount <= warehouseA.stock){
//     warehouseA.stock -= transferAmount;
//     warehouseB.stock += transferAmount;
//     console.log( `warehouseA.stock нь ${warehouseA.stock}, warehouseB.stock нь ${warehouseB.stock}`);
// }else {
//     console.log( "Шилжүүлэх тоо буруу")
// }

// const sender = { balance: 10000 };
// const receiver = { balance: 10000 };
// const amount = 20000;
// const fee = 500;

// const totalAmount = amount + fee;

// if (sender.balance > totalAmount) {
//   sender.balance -= totalAmount;
//   receiver.balance += amount;

//   console.log("Amjilttai ilgeelee");
// } else {
//   console.log("Dansnii uldegdel hureltsehgui baina");
// }

// console.log({ sender, receiver });

// const savings = {balance: 180000, goal: 200000}
// const deposit = 30000;
// if( deposit > 0 ){
//     savings.balance += deposit;
// }if ( savings.balance >= savings.goal){
//     console.log( `Зорилгодоо хүрлээ. ${savings.balance - savings.goal} төгрөгөөр давсан.`)
// }else{
//     console.log(`Зорилгод ${savings.goal - savings.balance} төгрөг дутуу байна.`)
// }

// const registration = {documents: ["Иргэний үнэмлэх", "Цээж зураг"], isPaid :true  };
// const hasAll = registration.documents.includes("Иргэний үнэмлэх")&&
//             registration.documents.includes("Цээж зураг");
// if(!hasAll ){
//     console.log( "Баримт бичиг дутуу");
// } else if (!registration.isPaid){
//     console.log("Төлбөр төлөөгүй");
// } else {
//     console.log( "Бүртгэл баталгаажлаа" );
// }

// const learner = {completedCourses: ["HTML", "CSS"], isActive:true };
// learner.canEnroll = learner.completedCourses.includes("HTML")&&
//                     learner.completedCourses.includes("CSS")&&
//                     learner.isActive
// console.log(`canEnroll нь ${learner.canEnroll}`);

// const result = {theory: 85, practice: 55}
// const theoryPassed = result.theory >= 60;
// const practicePassed = result.practice >= 60;
// if( theoryPassed && practicePassed){
//     console.log("Тэнцсэн")
// } else if ( theoryPassed){
//     console.log( "Онолын шалгалгалт дахин өгөх")
// }else if ( practicePassed){
//     console.log( "Дадлагын шалгалт дахин өгөх")
// }else {
//     console.log( "Хоёр шалгалтыг дахин өгнө")
// }

// const players = [
//   { name: "Ану", score: 100, time: 45 },
//   { name: "Бат", score: 100, time: 42 },
// ];
// const [p1, p2] = players;

// if (p1.score > p2.score) {
//   console.log(`${p1.name} яллаа`);
// } else if (p2.score > p1.score) {
//   console.log(`${p2.name} яллаа`);
// } else if (p1.time < p2.time) {
//   console.log(`${p1.name} яллаа`);
// } else if (p2.time < p1.time) {
//   console.log(`${p2.name} яллаа`);
// } else {
//   console.log("Тэнцээ");
// }

// const products = [
//   { name: "Дэвтэр", price: 3500 },
//   { name: "Баллуур", price: 1500 },
//   { name: "Үзэг", price: 2000 },
// ];
// let cheapest = products[0];
// if (products[1].price < cheapest.price) cheapest = products[1];
// if (products[2].price < cheapest.price) cheapest = products[2];
// console.log(cheapest.name )

// const delivery = { zone:"Захын бүс", isExpress:true  };
// let fee ;
//  switch (delivery.zone){
//  case "Төв":
//    fee = 3000 ;
//    break;
//  case "Захын бүс":
//     fee = 5000;
//     break; 
//  case "Орон нутаг":
//     fee = 10000;
//     break;
//     default:
//     fee = null;
// }
// if (fee === null) {
//     console.log("Хүргэлтийн бүс буруу");
//   } else {
//     if (delivery.isExpress) fee += 2000;
//     console.log(fee);
//   }

// const order = {status:"Бэлтгэж байна", isPaid:true, total:45000 };
// if( order.status === "Хүлээгдэж байна" || order.status ==="Бэлтгэж байна"){
//     order.status = "Цуцлагдсан"
//     order.refundAmount = order.isPaid ? order.total : 0;
// }
// console.log("28.", `status нь "${order.status}", refundAmount нь ${order.refundAmount}`);


// const purchase = {daysSincePurchas:5, hasReceipt:true, isDamaged:false};
// if( purchase.daysSincePurchas > 7){
//     console.log("7 хоногийн хугацаа хэтэрсэн" );
// } else if ( ! purchase.hasReceipt){
//     console.log("Баримтгүй байна");
// }else if (purchase.isDamaged) {
//     console.log("29.", "Бараа гэмтсэн байна");
//   } else {
//     console.log("29.", "Буцаах боломжтой");
//   }

// const card =  [{ name: "Дэвтэр", quantity: 2, stock: 5 }]
// const addQuantity = 3;
// const item = cart[0];
//   if (addQuantity > 0 && item.quantity + addQuantity <= item.stock) {
//     item.quantity += addQuantity;
//     console.log("30.", `Эхний барааны quantity нь ${item.quantity}`);
//   } else {
//     console.log("30.", "Тоо ширхгийг нэмэх боломжгүй");
//   }
