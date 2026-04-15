var wms_layers = [];

var format_commune_0 = new ol.format.GeoJSON();
var features_commune_0 = format_commune_0.readFeatures(json_commune_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_commune_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_commune_0.addFeatures(features_commune_0);
var lyr_commune_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_commune_0, 
                style: style_commune_0,
                popuplayertitle: 'commune',
                interactive: false,
                title: '<img src="styles/legend/commune_0.png" /> commune'
            });
var format_enr64_1 = new ol.format.GeoJSON();
var features_enr64_1 = format_enr64_1.readFeatures(json_enr64_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_enr64_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_enr64_1.addFeatures(features_enr64_1);
var lyr_enr64_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_enr64_1, 
                style: style_enr64_1,
                popuplayertitle: 'enr64',
                interactive: true,
    title: 'enr64<br />\
    <img src="styles/legend/enr64_1_0.png" /> Centrale au sol<br />\
    <img src="styles/legend/enr64_1_1.png" /> Ombrière de parking<br />\
    <img src="styles/legend/enr64_1_2.png" /> Ombrière de parking + Tennis/Padel couvert<br />\
    <img src="styles/legend/enr64_1_3.png" /> Tennis couvert<br />' });

lyr_commune_0.setVisible(true);lyr_enr64_1.setVisible(true);
var layersList = [lyr_commune_0,lyr_enr64_1];
lyr_commune_0.set('fieldAliases', {'ID': 'ID', 'COMMUNE': 'COMMUNE', 'TYPE_ENTR': 'TYPE_ENTR', 'ASTREINTE': 'ASTREINTE', 'VISI_NOCT': 'VISI_NOCT', 'DATE_ADHE': 'DATE_ADHE', 'LOT_MAIN': 'LOT_MAIN', 'EPCI': 'EPCI', 'DATE_MAJ': 'DATE_MAJ', 'NOM': 'NOM', 'long': 'long', 'GEOSAT': 'GEOSAT', 'DETECT': 'DETECT', 'a modifier': 'a modifier', 'enr': 'enr', });
lyr_enr64_1.set('fieldAliases', {'Nom projet': 'Nom projet', 'Commune': 'Commune', 'Code INSEE': 'Code INSEE', 'Point GPS': 'Point GPS', 'latitude': 'latitude', 'longitude': 'longitude', 'Maitre d\'o': 'Maitre d\'o', 'Type': 'Type', 'Puissance': 'Puissance', 'Cout de l\'': 'Coût d\'investissement', 'Mode de va': 'Mode de valorisation', 'Mise en se': 'Mise en service', 'Photo': 'Photo', 'id_web': 'id_web', 'id': 'id', });
lyr_commune_0.set('fieldImages', {'ID': 'Range', 'COMMUNE': 'TextEdit', 'TYPE_ENTR': 'TextEdit', 'ASTREINTE': 'CheckBox', 'VISI_NOCT': 'CheckBox', 'DATE_ADHE': 'DateTime', 'LOT_MAIN': 'TextEdit', 'EPCI': 'TextEdit', 'DATE_MAJ': 'DateTime', 'NOM': 'TextEdit', 'long': 'TextEdit', 'GEOSAT': 'TextEdit', 'DETECT': 'TextEdit', 'a modifier': 'TextEdit', 'enr': 'Range', });
lyr_enr64_1.set('fieldImages', {'Nom projet': 'TextEdit', 'Commune': 'TextEdit', 'Code INSEE': 'Range', 'Point GPS': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Maitre d\'o': 'TextEdit', 'Type': 'TextEdit', 'Puissance': 'TextEdit', 'Cout de l\'': 'TextEdit', 'Mode de va': 'TextEdit', 'Mise en se': 'TextEdit', 'Photo': 'ExternalResource', 'id_web': 'TextEdit', 'id': 'TextEdit', });
lyr_commune_0.set('fieldLabels', {'ID': 'hidden field', 'COMMUNE': 'hidden field', 'TYPE_ENTR': 'hidden field', 'ASTREINTE': 'hidden field', 'VISI_NOCT': 'hidden field', 'DATE_ADHE': 'hidden field', 'LOT_MAIN': 'hidden field', 'EPCI': 'hidden field', 'DATE_MAJ': 'hidden field', 'NOM': 'hidden field', 'long': 'hidden field', 'GEOSAT': 'hidden field', 'DETECT': 'hidden field', 'a modifier': 'hidden field', 'enr': 'no label', });
lyr_enr64_1.set('fieldLabels', {'Nom projet': 'header label - visible with data', 'Commune': 'header label - visible with data', 'Code INSEE': 'hidden field', 'Point GPS': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Maitre d\'o': 'hidden field', 'Type': 'header label - visible with data', 'Puissance': 'header label - visible with data', 'Cout de l\'': 'header label - visible with data', 'Mode de va': 'header label - visible with data', 'Mise en se': 'inline label - visible with data', 'Photo': 'inline label - always visible', 'id_web': 'hidden field', 'id': 'hidden field', });
lyr_enr64_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});