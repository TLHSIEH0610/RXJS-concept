const { Observable, map } = require("rxjs");

const users = {
  data: [
    { age: 18, status: "active" },
    { age: 12, status: "inactive" },
    { age: 14, status: "active" },
    { age: 33, status: "active" },
    { age: 23, status: "inactive" },
    { age: 4, status: "active" },
  ],
};

//observable is going to be emitting data.
const observable = new Observable((sub) => {
  sub.next(users);
}).pipe(
  map((value) => value.data),
  map((value) =>
    value.reduce((sum, user) => {
      return sum + user.age;
    }, 0)
  )
);

const observer = {
  next: (value) => {
    console.log(value);
  },
  error: (error) => {
    console.log(error);
  },
  complete: () => {
    console.log("complete");
  },
};

//connect observer & observerable
observable.subscribe(observer);
