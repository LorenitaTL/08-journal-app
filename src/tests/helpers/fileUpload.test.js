import cloudinary from 'cloudinary';
const { fileUpload } = require("../../helpers/fileUpload");

cloudinary.config({
    cloud_name: 'spmjerez',
    api_key: '439357634365715',
    api_secret: '1rZj2jBtUuJEl5DQuvipztdvUOI'
})

describe('Pruebas fileupload', () => {
    test('debe cargar una imagen y retornar el url', async (done) => {
        const resp = await fetch('https://as1.ftcdn.net/jpg/01/92/29/48/500_F_192294827_JGWUnZpiAB0tJYzkg83VzZU7sRit11AB.jpg');

        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        //Borrar imagen por id
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.png', '');

        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            done();
        })
    })

    test('debe de retornar un error', async () => {

        const file = new File([], 'foto.png');
        const url = await fileUpload(file);

        expect(url).toBe(null);
    })

})