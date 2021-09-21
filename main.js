function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/YGSyOpKnW/', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}