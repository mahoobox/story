// Data
let caseData = [
    {
		user: 'lokesh',
        nombre: "Gerardo González",
        producto: "Café Especial de Origen",
        region: "Distrito el Encanto",
		time: '15min',
		video: 'citylife'
	}
];


document.getElementById('intro__username').innerText=caseData[0]['nombre'];

// ********************************** CSS **********************************

function abrirCerrarIntro() {
    //document.getElementById('intro').classList.toggle('animate__animated');
    //document.getElementById('intro').classList.toggle('animate__fadeOut');

    // const myTimeout = setTimeout(myGreeting, 1000);
    // function myGreeting() {
    //      document.getElementById('intro').classList.toggle('d-none');
    // }


    document.getElementById('intro').classList.toggle('d-none');
    document.getElementById('main').classList.toggle('d-none');
}
