
var intents = new builder.IntentDialog({
    recognizers: [
        apiaiRecognizer
    ],
    intentThreshold: 0.2,
    recognizeOrder: builder.RecognizeOrder.series
});
