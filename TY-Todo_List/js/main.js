// save function
var saveTodo = function(event) {
    // debug可用  阻止表单默认提交行为
    event.preventDefault();

    // 获取表单的内容
    var todoTxt = document.getElementById("todoTxt").value;

    // 检查元素是否为空
    if(todoTxt.trim()===""){
        return;
    }

    // 创建新的代办事项
    var ul = document.querySelector(".bottom ul");
    var li = document.createElement("li");

    // 设置代办事项的内容
    li.innerHTML = `<input type="checkbox" class="if-completed" onclick="alreadydo(this)">
                    <span class="todo-text">${todoTxt}</span>
                    <button class="del" onclick="delTodo(this)">del</button>`;
    
    // 插入新的代办事项
    ul.appendChild(li);

    // 清空输入框
    document.getElementById("todoTxt").value = "";
}

// alreadydo
var alreadydo = function(element) {
    // 找到父元素
    var li = element.parentElement;
    
    // 检查复选框是否被勾选
    if (element.checked) {
        // 创建划线
        var line = document.createElement("div");
        line.classList.add("div_al");
        
        // 添加已完成样式
        li.classList.add("li_al");
        li.children[0].classList.add("in_al");
        li.children[1].classList.add("sp_al");
        li.children[2].classList.add("bt_al");
        
        // 添加划线元素
        li.appendChild(line);
    } else {
        // 移除已完成样式
        li.classList.remove("li_al");
        li.children[0].classList.remove("in_al");
        li.children[1].classList.remove("sp_al");
        li.children[2].classList.remove("bt_al");
        
        // 移除划线元素(如果存在)
        var lineElement = li.querySelector(".div_al");
        if (lineElement) {
            li.removeChild(lineElement);
        }
    }
}


// del function
var delTodo = function(element) {
    // 找到元素的父元素li
    var li = element.parentElement;
    // del
    li.remove();
}
