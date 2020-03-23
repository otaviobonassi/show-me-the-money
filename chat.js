const btnOpen = document.querySelector("#chat");
const btnSendOne = document.querySelector("#send-text-1");
const btnSendTwo = document.querySelector("#send-text-2");
const btnCloseOne = document.querySelector("#close-chat-1");
const btnCloseTwo = document.querySelector("#close-chat-2");
const btnCloseThree = document.querySelector("#close-chat-3");
const chatContainerOne = document.querySelector(".chat-container-1");
const chatContainerTwo = document.querySelector(".chat-container-2");
const chatContainerThree = document.querySelector(".chat-container-3");
const textArea = document.querySelector("textarea");

const template_params = {
    to_name: 'Venda Criativa',
};

btnOpen.addEventListener("click", () => {
    chatContainerOne.classList.toggle("off");
    textArea.value = "";
})

btnCloseOne.addEventListener("click", () => {
    chatContainerOne.classList.toggle("off");
})

btnCloseTwo.addEventListener("click", () => {
    chatContainerTwo.classList.toggle("off");
})

document.addEventListener("click", (evt) => {
    console.log(evt);
});

btnCloseThree.addEventListener("click", () => {
    chatContainerThree.classList.toggle("off");
})

btnSendOne.addEventListener("click", () => {
    chatContainerOne.classList.toggle("off");
    chatContainerTwo.classList.toggle("off");
    template_params.message_html = textArea.value;
})


btnSendTwo.addEventListener("click", (evt) => {
    evt.preventDefault();
    chatContainerTwo.classList.toggle("off");

    template_params.from_name = document.querySelector("#email").value,

    data = {
        service_id: 'default_service',
        template_id: 'template_Lj63yxjN',
        user_id: 'user_56SK0lMABVMeaideZgasL',
        template_params
    }

    axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
    .then( (data) => {console.log(data)})
    .catch( (err) => {console.log(err)});

    chatContainerThree.classList.toggle("off");

    btnOpen.addEventListener("click", () => {
        chatContainerThree.classList.toggle("off");
    })
})
