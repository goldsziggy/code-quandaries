exports.a = () => {
  exports.b();
};

exports.b = () => {
  console.log("hi");
};

exports.a();
