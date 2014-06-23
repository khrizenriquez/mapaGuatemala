/*
	autor:			@khrizenriquez
	descripción:	Mapa de Guatemala de manera vectorial

	otras referencias: para obtener detalle de lo que se puede hacer con svg y html en la
						actualidad y los diferentes navegadores web esta "can i use( http://caniuse.com/#search=svg )"
*/
//	En este objeto guardo los datos de los departamentos, la información la obtuve de la wiki ( http://es.wikipedia.org/wiki/Departamentos_de_Guatemala )
var datosDeptos = {
	jutiapa: [{
		nombreDepto: "Jutiapa",
		descripcion: "Jutiapa es uno de los 22 departamentos de la República de Guatemala, ubicado a 118 km de la capital, es bastante montañoso y cuenta con playas turísticas al sur del departamento. Su clima es muy diverso entre cálido y templado. Su cabecera departamental es Jutiapa y limita al norte con los departamentos de Jalapa y Chiquimula; al sur con el departamento de Santa Rosa y el Océano Pacífico y al este con la República de El Salvador Cuenta con una población de 489.085 habitantes. Jutiapa es habitado en su mayoría por descendientes Europeos. La mayoría de su población es de 'raza' ladino o (mestizo) no indígena. Su extensión territorial es de 3.219 km2.",
		url: "http://es.wikipedia.org/wiki/Jutiapa_(Guatemala)",
	}],
	santaRosa: [{
		nombreDepto: "Santa Rosa",
		descripcion: "El departamento de Santa Rosa se encuentra en la región sudeste de Guatemala, su cabecera departamental es Cuilapa (conocido como el ombligo de América por encontrarse en el centro del continente). Limita al Norte con los departamentos de Guatemala (departamento) y Jalapa; al Sur con el Océano Pacífico; al Este con el departamentos de Jutiapa; y al Oeste con el departamento de Escuintla.<br />Su configuración geográfica es bastante variada, con alturas que oscilan entre los 214 y 1.330 msnm, con un clima que varía desde el templado en las montañas hasta el cálido en la costa del Pacífico.",
		url: "http://es.wikipedia.org/wiki/Santa_Rosa_(Guatemala)",
	}],
	escuintla: [{
		nombreDepto: "Escuintla",
		descripcion: "Escuintla es el nombre de un departamento de Guatemala, situado en el centro-sur del país (en la región V). Posee una extensión territorial de 4384 km². Su cabecera departamental(del mismo nombre) es la tercera ciudad más grande e importante del país con una población aproximada de 162.000 habitantes. Otras ciudades importantes en Escuintla son: Santa Lucia Cotzumalguapa, Tiquisate y Puerto San José, Nueva Concepción, al lado de Puerto Quetzal. El departamento Escuintla tiene un clima tropical. Es una región con muchas fincas grandes. Escuintla esta bañada por las aguas del pacífico. Su nombre proviene etimológicamente de Itzcuintlan que significa tierra de perros, por la confusión de los conquistadores españoles, entre los perros y los tepezcuintles, autóctonos y abundantes en la región.",
		url: "http://es.wikipedia.org/wiki/Escuintla_(departamento)",
	}],
	suchitepequez: [{
		nombreDepto: "Suchitepéquez",
		descripcion: "El Departamento de Suchitepequez se encuentra situado en la región Sur Occidental de Guatemala. Limita al Norte con Quetzaltenango, Sololá y Chimaltenango, al Sur con el Océano Pacífico, al Este con Escuintla; y al Oeste con Retalhuleu. La cabecera departamental está a una distancia de 165 kilómetros de la Ciudad Capital de Guatemala.",
		url: "http://es.wikipedia.org/wiki/Suchitep%C3%A9quez",
	}],
	retalulehu: [{
		nombreDepto: "Retalhuleu",
		descripcion: "El Departamento de Retalhuleu se encuentra situado en la región Sur Occidental de Guatemala. Limita al Norte con Quetzaltenango, al Sur con el Océano Pacífico, al Este con Suchitepéquez; y al Oeste San Marcos (Guatemala) . La cabecera departamental se encuentra a una distancia de 190 kilómetros de la Ciudad Capital de Guatemala. Retalhuleu posee un clima cálido todo el año ya que sus temperaturas van de los 22 a los 34 °C.",
		url: "http://es.wikipedia.org/wiki/Retalhuleu",
	}],
	ciudadGuatemala: [{
		nombreDepto: "Guatemala",
		descripcion: "Guatemala es un departamento al sur de la República de Guatemala. Su capital es la Ciudad de Guatemala.<br />Limita al norte con el departamento de Baja Verapaz, al noreste con el departamento de El Progreso, al este con el departamento de Jalapa, al sudeste con el departamento de Santa Rosa, al sudoeste con el departamento de Escuintla, al oeste con los departamentos de Sacatepéquez y Chimaltenango y al noroeste con el departamento de El Quiché. Su superficie es de 2.126 km².",
		url: "http://es.wikipedia.org/wiki/Guatemala_(departamento)",
	}],
	chimaltenango: [{
		nombreDepto: "Chimaltenango",
		descripcion: "El departamento de Chimaltenango se encuentra situado en la región Central de Guatemala. Limita al norte con los departamentos de El Quiché y Baja Verapaz; al este con Guatemala y Sacatepéquez; al sur con Escuintla y Suchitepéquez, y al oeste con Sololá. La cabecera departamental es Chimaltenango, está a una distancia de aproximada de 54 kilómetros de la Ciudad Capital de Guatemala.",
		url: "http://es.wikipedia.org/wiki/Chimaltenango_(departamento)",
	}],
	sacatepequez: [{
		nombreDepto: "Sacatepéquez",
		descripcion: "El departamento de Sacatepéquez está situado en la región Central de Guatemala. Limita al Norte, con el departamento de Chimaltenango; al Sur, con el departamento de Escuintla; al Este, con el departamento de Guatemala; y al Oeste, con el departamento de Chimaltenango.<br />La cabecera departamental, Antigua Guatemala, se encuentra a 54 kilómetros al oeste de la ciudad capital de Guatemala.",
		url: "http://es.wikipedia.org/wiki/Sacatep%C3%A9quez",
	}],
	chiquimula: [{
		nombreDepto: "Chiquimula",
		descripcion: "Chiquimula es un departamento ubicado en el oriente de Guatemala. Limita al norte con el departamento de Zacapa; al sur con la República de El Salvador y el departamento de Jutiapa; al este con la República de Honduras; y al oeste con los departamentos de Jalapa y Zacapa. Es conocido en el ámbito guatemalteco como La Perla de Oriente. Es uno de los departamentos con mejor Índice de Desarrollo Humano, además es el tercer departamento de Guatemala en tener un mayor porcentaje de población económicamente activa y es el cuarto con mayor producción de Producto Interno Bruto y ocupa el segundo puesto en los departamentos con mejor PIB per cápita.1 Es el departamento más visitado del país, datos del Instituto Guatemalteco de Turismo estiman que un aproximado de 4 a 5 millones de personas visitan este departamento cada año, superando a los departamentos de Guatemala, Sacatepéquez y Petén; Esquipulas es el municipio principalmente visitado.2 3 Las únicas dos ciudades existentes son la Ciudad de Chiquimula y la Ciudad de Esquipulas, la primera ubicada en el nor-occidente del departamento y la segunda se ubica en el sur-centro.4 Tiene una población de 388 115 habitantes, la mayoría jóvenes entre 0 a 35 años. Es el séptimo departamento con menor población. Aproximadamente el 93% esta compuesto mayoritariamente por mestizos y criollos, en su mayoría de español y alemán, el otro 7% esta compuesto por los indígenas en su mayoría el pueblo Chortís.",
		url: "http://es.wikipedia.org/wiki/Chiquimula_(departamento)",
	}],
	jalapa: [{
		nombreDepto: "Jalapa",
		descripcion: "El Departamento de Jalapa se encuentra situado en la región Sur-Oriente de Guatemala. Limita al Norte con los departamentos de El Progreso y Zacapa; al Sur con los departamentos de Jutiapa y Santa Rosa; al Este con el departamento de Chiquimula; y al Oeste con el departamento de Guatemala. La cabecera departamental de Jalapa se encuentra aproximadamente a una distancia de 96 km de la ciudad capital vía Sanarate y una distancia aproximada de 168 Km vía Jutiapa - Santa Rosa.",
		url: "http://es.wikipedia.org/wiki/Jalapa_(Guatemala)",
	}],
	sanMarcos: [{
		nombreDepto: "San Marcos",
		descripcion: "El Departamento de San Marcos se encuentra situado en la región suroccidental de Guatemala. Su extensión territorial es de 3.791 kilómetros cuadrados. Limita al norte con Huehuetenango, al sur con el océano Pacífico y Retalhuleu, al este con Quetzaltenango; y al oeste con el estado mexicano de Chiapas. La cabecera departamental se encuentra a una distancia de 252 kilómetros de la ciudad capital de Guatemala.",
		url: "http://es.wikipedia.org/wiki/San_Marcos_(Guatemala)",
	}],
	quetzaltenango: [{
		nombreDepto: "Quetzaltenango",
		descripcion: "Quetzaltenango es un departamento de Guatemala. Su cabecera es Quetzaltenango. El departamento de Quetzaltenango tiene 1.953 km², equivalentes al 1,8% del territorio nacional. A nivel departamental el 60,57% de la población es indígena, porcentaje superior al observado a nivel nacional (41,9%); predomina el grupo étnico k'iche' y mam. Se habla español, idioma oficial, pero también se habla k'iche' y mam. Es importante señalar que muchas de las mujeres indígenas jóvenes ya no visten sus trajes regionales (típicos)",
		url: "http://es.wikipedia.org/wiki/Quetzaltenango_(departamento)",
	}],
	solola: [{
		nombreDepto: "Sololá",
		descripcion: "El Departamento de Sololá se encuentra situado en la región Sur Occidental de Guatemala. Limita al Norte con Totonicapán y Quiché, al Sur con Suchitepéquez, al Este con Chimaltenango; y al Oeste Suchitepéquez y Quetzaltenango. La cabecera departamental se encuentra a una distancia de 140 kilómetros de la Ciudad Capital de Guatemala.",
		url: "http://es.wikipedia.org/wiki/Solol%C3%A1",
	}],
	elProgreso: [{
		nombreDepto: "El Progreso",
		descripcion: "El Progreso es un departamento que se encuentra situado en la región nororiental de Guatemala, su cabecera departamental es Guastatoya, limita al Norte con el departamento de Alta Verapaz y Baja Verapaz; al Sur con Guatemala y Jalapa; al Este con Zacapa y Jalapa; y al Oeste con Baja Verapaz y Guatemala.<br />La cabecera departamental de El Progreso se encuentra a una distancia de 74 kilómetros de la Ciudad Capital de Guatemala.",
		url: "http://es.wikipedia.org/wiki/El_Progreso_(Guatemala)",
	}],
	zacapa: [{
		nombreDepto: "Zacapa",
		descripcion: "El Departamento de Zacapa se encuentra situado en la región Nor-Oriente de la República de Guatemala. Limita al Norte con los departamentos de Alta Verapaz e Izabal; al Sur con los departamentos de Chiquimula y Jalapa; al Este con el departamento de Izabal y la República de Honduras; y al Oeste con el departamento de El Progreso. Su cabecera departamental es Zacapa. Por su configuración geográfica que es bastante variada, sus alturas oscilan entre los 130 msnm en Gualán y los 880 en el municipio de la Unión, su clima es cálido. Zacapa está habitado en su mayoría por descendientes europeos en su mayoría de origen español.",
		url: "http://es.wikipedia.org/wiki/Zacapa",
	}],
	quiche: [{
		nombreDepto: "Quiché",
		descripcion: "Quiché es un departamento que se encuentra situado en la región noroccidental de Guatemala. Limita al norte con México; al sur con los departamentos de Chimaltenango y Sololá; al este con los departamentos de Alta Verapaz y Baja Verapaz; y al oeste con los departamentos de Totonicapán y Huehuetenango.",
		url: "http://es.wikipedia.org/wiki/Quich%C3%A9_(Guatemala)",
	}],
	totonicapan: [{
		nombreDepto: "Totonicapán",
		descripcion: "El Departamento de Totonicapán se encuentra situado en la región Sur-Occidental de Guatemala. Limita al Norte con el departamento de Huehuetenango; al Sur con el departamento de Sololá; al Este con el departamento de Quiché; y al Oeste con el departamento de Quetzaltenango. La cabecera departamental se encuentra a una distancia de 203 kilómetros aproximadamente, de la ciudad capital.",
		url: "http://es.wikipedia.org/wiki/Totonicap%C3%A1n",
	}],
	bajaVerapaz: [{
		nombreDepto: "Baja Verapaz",
		descripcion: "El Departamento de Baja Verapaz se encuentra situado en la región Norte de Guatemala. Limita al Norte con el departamento de Alta Verapaz; al Sur con el departamento de Guatemala; al Este con el departamento de El Progreso; y al Oeste con el departamento de El Quiché.",
		url: "http://es.wikipedia.org/wiki/Baja_Verapaz",
	}],
	izabal: [{
		nombreDepto: "Izabal",
		descripcion: "El Departamento de Izabal se encuentra situado en la región Nor-Oriental de Guatemala. Limita al Norte con el departamento de Petén, Belice y el mar Caribe; al Sur con el departamento de Zacapa; al Este con la República de Honduras; y al Oeste con el departamento de Alta Verapaz. La cabecera departamental, Puerto Barrios, se encuentra a una distancia de 308 km de la capital nacional. En el centro del departamento se encuentra el Lago de Izabal, el más grande de Guatemala.",
		url: "http://es.wikipedia.org/wiki/Izabal",
	}],
	huehuetenango: [{
		nombreDepto: "Huehuetenango",
		descripcion: "Huehuetenango es el nombre de un departamento de Guatemala, de un municipio de este departamento que a su vez es la cabecera departamental. El departamento está situado en la región Nor-occidental del país y limita al norte y oeste, con México, al sur con los departamentos de San Marcos, Quetzaltenango y Totonicapán; y al este con el departamento de El Quiché.",
		url: "http://es.wikipedia.org/wiki/Huehuetenango",
	}],
	altaVerapaz: [{
		nombreDepto: "Alta Verapaz",
		descripcion: "Alta Verapaz es un departamento ubicado al norte de Guatemala, a unos 200 km de la Ciudad de Guatemala. Limita al norte con Petén; al este con Izabal; al sur con Zacapa, El Progreso y Baja Verapaz; y al oeste con El Quiché. Su cabecera es Cobán. Es uno de los departamentos más ricos en naturaleza de Guatemala: destacan entre sus maravillas las piscinas naturales de Semuc Champey en el río Cahabón; las cuevas de Candelaria, el Rey Marcos y Lanquín; y sus bosques húmedos.<br />En su patrimonio histórico-artístico, destacan los 64 enclaves arqueológicos correspondientes al período maya y algunos edificios religiosos singulares del período colonial, sobre todo en Cobán, San Juan Chamelco y San Pedro Carchá.",
		url: "http://es.wikipedia.org/wiki/Alta_Verapaz",
	}],
	peten: [{
		nombreDepto: "Petén",
		descripcion: "Petén (itzá: Noh Petén, 'Gran Isla')?1 es un departamento de Guatemala situado su extremo septentrional. Limita al norte con México; al sur con los departamentos de Izabal y Alta Verapaz; al este con Belice; y al oeste con México. Posee una extensión territorial de 35.854 km², lo que lo convierte en el departamento más extenso de Guatemala así como en la entidad subnacional más grande de Centroamérica. Flores, la cabecera departamental, se encuentra aproximadamente a 488 km de la capital nacional.",
		url: "http://es.wikipedia.org/wiki/Pet%C3%A9n",
	}],
};

window.onload = function (argument) {
	//		Mensaje bienvenida que aparecera en el párrafo cuando carge todo
	document.querySelector( ".infoDepto p" ).innerHTML = "Para ver una pequeña descripción de cada departamento de Guatemala bastara con que posiciones o te posisiones sobre cualquier departamento :).";
	colorInfo ( document.querySelector( ".infoDepto" ), "#2980b9", "#3498db" );
}

//		Función para hacer que cambie de color la información de cada departamento
function colorInfo ( etiquetaDescr, color1, color2 ) {
	if ( etiquetaDescr.length === null ) {
		// es porque no existe ese elemento
	}else{
		var bandera = true;
		elementoConEfecto = setInterval( function () {
			if ( bandera ) {
				bandera = false;
				etiquetaDescr.style.background = color1;
			}else{
				etiquetaDescr.style.background = color2;
				bandera = true;
			}
		}, 2000 );
	}
}

//		Función para mostrar la información de cada departamento cuando esten sobre el
function infoDepartamento ( data ) {
	var departamento = data.id;
	//	Cada vez que este sobre un depto lo dejo marcado pero antes pinto todo del mismo color
	colorInicial( document.querySelectorAll( ".deptoGuate svg path" ) );
	data.style.fill = "#e67e22";
	//	Llamo a las funciones para limpiar el valor del texto y los enlaces
	limpiaValores( document.querySelector( ".infoDepto h2" ) );
	limpiaValores( document.querySelector( ".infoDepto p" ) );
	limpiaValores( document.querySelector( ".infoDepto .enlace" ) );

	//	Colocando los datos donde corresponde
	//colocando el nombre del departamento
	var nombre = JSON.stringify( datosDeptos[departamento][0].nombreDepto ).toString().toUpperCase();
	document.querySelector( ".infoDepto h2" ).innerHTML = nombre;
	
	//colocando la descripción del departamento
	var descripcion = JSON.stringify( datosDeptos[departamento][0].descripcion ).toString();
	document.querySelector( ".infoDepto p" ).innerHTML = descripcion;
	
	//colocando la url del departamento
	var enlace = JSON.stringify( datosDeptos[departamento][0].url ).toString();
	document.querySelector( ".infoDepto .enlace" ).innerHTML = "<a href='" + enlace.replace( /"/g, "" )
	+ "'>Esta información se extrajo de la Wiki</a>";

}

//		Función para limpiar los valores de la descripción del departamento, etiquetaDescr = etiqueta descripción
function limpiaValores ( etiquetaDescr ) {
	if ( etiquetaDescr.length === null ) {
		// es porque no existe ese elemento
	}else{
		etiquetaDescr.innerHTML = "";
	}
}

//		Función para pintar todos los elementos del svg al color inicial
function colorInicial ( etiquetaDescr ) {
	for ( var i = 0; i < etiquetaDescr.length; i++ ) {
		etiquetaDescr[ i ].style.fill = "#1abc9c";
	}
}