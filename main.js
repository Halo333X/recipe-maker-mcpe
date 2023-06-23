alert('In the boxes put the id of your items, like: new:item');

document.addEventListener('DOMContentLoaded', function () {
    var createRecipeButton = document.getElementById('createRecipeButton');

    createRecipeButton.addEventListener('click', function () {
        const count = document.getElementById('count').value;
        const namespace = document.getElementById('namespace').value;
        const contenido1 = document.getElementById('i1').value;
        const contenido2 = document.getElementById('i2').value;
        const contenido3 = document.getElementById('i3').value;
        const contenido4 = document.getElementById('i4').value;
        const contenido5 = document.getElementById('i5').value;
        const contenido6 = document.getElementById('i6').value;
        const contenido7 = document.getElementById('i7').value;
        const contenido8 = document.getElementById('i8').value;
        const contenido9 = document.getElementById('i9').value;
        const contenido10 = document.getElementById('i10').value;

        let recipe = {
            "format_version": "1.18.0",
            "minecraft:recipe_shaped": {
                "description": {
                    "identifier": `${namespace}:${contenido10}`
                },
                "tags": ["crafting_table"],
                "pattern": [
                    "abc",
                    "def",
                    "ghi"
                ],
                "key": {},
                "result": {
                    "item": `${contenido10}`,
                    "count": `${count}`
                }
            }
        };

        // Agregar variables al objeto "key" solo si no son undefined, NaN o ''
        if (contenido1 !== undefined && contenido1 !== NaN && contenido1 !== '') {
            recipe['minecraft:recipe_shaped'].key['a'] = { "item": `${contenido1}` };
        }
        if (contenido2 !== undefined && contenido2 !== NaN && contenido2 !== '') {
            recipe['minecraft:recipe_shaped'].key['b'] = { "item": `${contenido2}` };
        }
        if (contenido3 !== undefined && contenido3 !== NaN && contenido3 !== '') {
            recipe['minecraft:recipe_shaped'].key['c'] = { "item": `${contenido3}` };
        }
        if (contenido4 !== undefined && contenido4 !== NaN && contenido4 !== '') {
            recipe['minecraft:recipe_shaped'].key['d'] = { "item": `${contenido4}` };
        }
        if (contenido5 !== undefined && contenido5 !== NaN && contenido5 !== '') {
            recipe['minecraft:recipe_shaped'].key['e'] = { "item": `${contenido5}` };
        }
        if (contenido6 !== undefined && contenido6 !== NaN && contenido6 !== '') {
            recipe['minecraft:recipe_shaped'].key['f'] = { "item": `${contenido6}` };
        }
        if (contenido7 !== undefined && contenido7 !== NaN && contenido7 !== '') {
            recipe['minecraft:recipe_shaped'].key['g'] = { "item": `${contenido7}` };
        }
        if (contenido8 !== undefined && contenido8 !== NaN && contenido8 !== '') {
            recipe['minecraft:recipe_shaped'].key['h'] = { "item": `${contenido8}` };
        }
        if (contenido9 !== undefined && contenido9 !== NaN && contenido9 !== '') {
            recipe['minecraft:recipe_shaped'].key['i'] = { "item": `${contenido9}` };
        }

        // Convertir el objeto recipe a una cadena JSON
        const jsonString = JSON.stringify(recipe, null, 2);

        // Crear un enlace de descarga
        const downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(jsonString);
        downloadLink.download = `${contenido10}.json`;

        // Simular un clic en el enlace de descarga
        downloadLink.click();
    });
});