
// Function to create thumbnails with comics as a list and set their position
function createThumbnail(comic, position) {
    const thumbnailEntity = document.createElement('a-entity');
    thumbnailEntity.setAttribute('geometry', 'primitive: plane; width: 1; height: 1;');

    const thumbnailMaterial = document.createElement('a-material');
    thumbnailMaterial.setAttribute('src', comic);

    thumbnailEntity.setAttribute('material', thumbnailMaterial);
    thumbnailEntity.setAttribute('position', position);
    thumbnailEntity.setAttribute('scale', '0.7 0.7 0.7');

    return thumbnailEntity;
}


// Function to create a boundary for posters
function createBoundary() {
    const boundaryEntity = document.createElement('a-entity');
    boundaryEntity.setAttribute('geometry', 'primitive: plane; width: 6; height: 4;');
    boundaryEntity.setAttribute('material', 'color: transparent; wireframe: true;');
    boundaryEntity.setAttribute('position', '0 2 -5');

    return boundaryEntity;
}

// Function to create a title for the screen
function createTitle() {
    const titleEntity = document.createElement('a-entity');
    titleEntity.setAttribute('text', 'value: Virtual Comics World; align: center; width: 6;');
    titleEntity.setAttribute('position', '0 2.5 -5');

    return titleEntity;
}

// Function to set up the virtual comics world
function init() {
    const scene = document.getElementById('scene');

    // Create a boundary for posters
    const boundary = createBoundary();
    scene.appendChild(boundary);

    // Create a title for the screen
    const title = createTitle();
    scene.appendChild(title);

    // Add thumbnails and their positions here
    const comics = [
        'batman.jpg',
        'ironman.jpg',
        'spiderman.jpg',
        // Add more comic images here
    ];

    const positions = [
        '-2 1.5 -4',
        '0 1.5 -4',
        '2 1.5 -4',
        // Add more positions here
    ];

    // Create thumbnails and add them to the comic container
    const comicContainer = document.getElementById('comic-container');
    comics.forEach((comic, index) => {
        const thumbnail = createThumbnail(comic, positions[index]);
        comicContainer.appendChild(thumbnail);
    });
}

// Call the init function to set up the virtual comics world
init();
