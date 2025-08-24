// https://en.wikipedia.org/wiki/Floyd%E2%80%93Steinberg_dithering

const raw_matrix = [
    [0,0,7],
    [3,5,1]
];

const matrix = raw_matrix.map(row => row.map(num => num / 16))

/** @param {number} x
    @param {number} y
    @param {number} width - The width of the image.
    @returns {number} - The pixel index at (x,y).
*/
function get_pixel(x,y, width) {
    return ((y * width) + x) * 4;
}

/** @param {number} n - The amount of colors the palette should have.
    @returns {Array<[number, number, number]>} - The generated palette.
*/
function make_palette(n) {
    const palette = [];
    const step = Math.floor(255 / (n - 1));
    
    for (let i = 0; i < n; i++) {
        palette.push([
            step * i,
            step * i,
            step * i
        ]);
    }
    
    return palette;
}

/** @param {Array<[number, number, number]>} palette - The reduced color palette.
    @param {[color, color, color]} pixel - The original pixel of the image.
    @returns {number} - The index of the palette which closest resembles the original pixel.
*/
function get_closest(palette, pixel) {
    let index = -1;
    let difference = Infinity;
    let curr_index = 0;
    
    for (const color of palette) {
        const new_difference =
              Math.abs(color[0] - pixel[0]) +
              Math.abs(color[1] - pixel[1]) +
              Math.abs(color[2] - pixel[2]);

        if (new_difference < difference) {
            index = curr_index;
            difference = new_difference;
        }

        curr_index++;
    }
    
    return index;
}

/** @param {[number, number, number]} color - The new, reduced color for the pixel.
    @param {[number, number, number]} pixel - The original color of the pixel.
    @returns {[number, number, number]} - The difference between the old and new color, component-wise.
*/
function get_error(color, pixel) {
    return [
        pixel[0] - color[0],
        pixel[1] - color[1],
        pixel[2] - color[2],
    ];
}

/** @param {CanvasRenderingContext2D} ctx
    @param {number} width
    @param {number} height
    @param {number} palette_size
*/
function dither(ctx, width, height, palette) {
    const image_data = ctx.getImageData(0,0,width,height);

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = get_pixel(x,y, width);

            // Get the current pixel value.
            const pixel = image_data.data.slice(idx, idx + 3);

            // Calculate the closest new color in the palette.
            const closest = get_closest(palette, pixel);
            const color = palette[closest];

            // Set the pixel to the new color.
            image_data.data.set(color, idx);

            // Calculate the error,
            // i.e. difference between the two colors.
            const error = get_error(color, pixel);
            for (let ny = 0; ny <= 1; ny++) {
                for (let nx = -1; nx <= 1; nx++) {
                    const y_offset = y + ny;
                    const x_offset = x + nx;
                    const in_bounds =
                          y_offset < height &&
                          y_offset >= 0 &&
                          x_offset < width &&
                          x_offset >= 0;
                    
                    if (in_bounds) {                    
                        const matrix_elem = matrix[ny][nx + 1];
                        const next_idx = get_pixel(x_offset, y_offset, width);

                        const corrected = [
                            error[0] * matrix_elem,
                            error[1] * matrix_elem,
                            error[2] * matrix_elem,
                        ];
                        
                        // Propagate the error.
                        image_data.data[next_idx+0] += corrected[0];
                        image_data.data[next_idx+1] += corrected[1];
                        image_data.data[next_idx+2] += corrected[2];
                    }
                }
            }
        }
    }

    ctx.putImageData(image_data, 0,0);
}

window.addEventListener("load", () => {
    const images = document.querySelectorAll("img");
    const palette_size = 3;
    const palette = make_palette(palette_size);

    /* Major colors
    const palette = [
        [0,0,0],
        [255, 0, 0],
        [128, 128, 0],
        [0, 255, 0],
        [0, 128, 128],
        [0, 0, 255],
        [128, 0, 128],
        [255,255,255],
        ];
    */

    /* Beige
    const palette = [
        [28, 28, 23],
        [84, 84, 69],
        [140, 140, 115],
        [186, 186, 171],
        ];
    */

    images.forEach(image => {
        const width = image.naturalWidth;
        const height = image.naturalHeight;

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0,0);

        dither(ctx, width, height, palette);

        const dataURL = canvas.toDataURL("image/png");
        image.src = dataURL;
    })
})
