// --------input--------------
const myarray = [];
// element

const element = {
  arrayInputValue: () => document.getElementById("array_input_value"),
  arrayBtn: () => document.getElementById("array_button"),
  arrayResult: () => document.getElementById("array_result"),
  inputSection61: () => {
    let input = document.createElement("input");
    input.setAttribute("id", "input61");
    input.setAttribute("placeholder", "Vị trí 1");
    return input;
  },
  inputSection62: () => {
    let input = document.createElement("input");
    input.setAttribute("id", "input62");
    input.setAttribute("placeholder", "Vị trí 2");
    return input;
  },
};
//Câu hỏi 1
var q1 = 0;
for (var i = 0; i < myarray.length; i++) {
  const element = myarray[i];
  if (element > 0) {
    q1 += element;
  } else {
    console.log("Không có đáp án");
  }
}
console.log(q1);

//Hiển thị kết quả
element.arrayBtn().onclick = () => {
  const INPUT_VALUE = element.arrayInputValue().value;
  if (INPUT_VALUE === "") {
    window.alert("Nhập dữ liệu vào ô!");
    return;
  }
  if (isNaN(INPUT_VALUE * 1)) {
    window.alert("Dữ liệu không hợp lệ!");
    return;
  }
  element.arrayInputValue().value = "";
  element.arrayInputValue().focus();
  myarray.push(INPUT_VALUE * 1);
  element.arrayResult().innerHTML = myarray;
};
