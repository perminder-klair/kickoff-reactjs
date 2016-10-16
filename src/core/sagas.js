import gallerySaga from './gallery/gallerySaga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield [
        gallerySaga()
    ];
}
