from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score
)
from seqeval.metrics import classification_report

def evaluate_ner(true_labels, pred_labels):
    """Evaluate NER model performance"""
    return classification_report(true_labels, pred_labels)

def evaluate_classification(true_labels, pred_labels):
    """Evaluate formatting classifier"""
    return {
        'accuracy': accuracy_score(true_labels, pred_labels),
        'precision': precision_score(true_labels, pred_labels),
        'recall': recall_score(true_labels, pred_labels),
        'f1': f1_score(true_labels, pred_labels)
    }
