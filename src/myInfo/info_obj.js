const myinfo = {
  firstName: "Ihor",
  lastName: "Horbulin",
  name: "Horbulin Ihor",
  age: 24,
  phone: "0988883399",
  email: "my_mail@mail.com",
  city: "Kyiv",
  photo: `./images/photo.jpg`,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
export default myinfo;
