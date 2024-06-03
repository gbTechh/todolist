function uuid(n = 5){
	let str = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJLMNÑOPQRSTUVWXYZ0123456789"
	let uuid = '';
	for (let i = 0; i < n; i++) {
		uuid = uuid + str[ Math.ceil(Math.random()*str.length)]		
	}
	return uuid;
}


document.addEventListener('DOMContentLoaded', () => {

	const INPUT_ADD = document.querySelector('#task')

	document.querySelector('#new-task').onsubmit = () => {
		const input = document.createElement("INPUT");
		const label = document.createElement("LABEL");
		const btnDelete = document.createElement("BUTTON");
		let id = uuid();
		input.setAttribute("type", "checkbox");
		input.setAttribute("class", "checkbox");
		input.setAttribute("id", id);
		label.setAttribute("for", id)
    label.classList.add("label");
		btnDelete.setAttribute("class","btnDelete")
		btnDelete.innerText = "x"

		const li = document.createElement('li');
		label.innerText = INPUT_ADD.value
		li.appendChild(input);
		li.appendChild(label);
		li.appendChild(btnDelete);

		if(document.querySelector('#task').value){
			document.querySelector('#tasks').append(li);
		}

		document.querySelector('#task').value = '';
			return false;
		};

		document.addEventListener('click', (e) => {		
			if(e.target.matches("button#clearbtn")){
				document.querySelectorAll('li').forEach(e => {
					e.firstChild.checked = false
          e.querySelector('label').classList.remove("line")
				})
			}
			if(e.target.matches("button.btnDelete")){
				const li = e.target.parentElement
				document.querySelector('#tasks').removeChild(li)
			}
			if(e.target.matches("input.checkbox")){
				if(e.target.checked){
					e.target.nextSibling.classList.add("line")
				}else {
          e.target.nextSibling.classList.remove("line")
        }
			}
		})
		
});