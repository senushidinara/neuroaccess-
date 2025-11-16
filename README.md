# NeuroAccess: AI-Powered Cognitive Equity Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.8+](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-2.12+-FF6F00.svg)](https://tensorflow.org)

> **Democratizing cognitive healthcare through affordable EEG and AI** - Bringing personalized learning and mental health support to underserved communities worldwide.

## 🎯 Overview

NeuroAccess is an **offline-first AI platform** that transforms low-cost EEG headsets into cognitive accessibility tools. It detects learning barriers in real-time and adapts educational content based on cognitive states (attention, stress, engagement).

**Key Features:**
- 🧠 **Real-time cognitive state detection** using gamma band EEG analysis
- 🎓 **Adaptive learning engine** that personalizes content
- 📊 **Explainable AI dashboard** for teachers and caregivers
- 🌍 **Offline-first design** for low-connectivity areas
- 💰 **Cost-effective** - works with $20-50 EEG devices

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+
- Flutter 3.0+

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/senushidinara/neuroaccess-horizonhacks
cd neuroaccess-horizonhacks#
```
1. Backend Setup

```bash
cd backend
pip install -r requirements.txt
python main.py
```

1. Frontend Setup

```bash
cd frontend
npm install
npm start
```

1. Mobile App 

```bash
cd mobile
flutter pub get
flutter run
```
🏗️ Architecture

```
User Device (Mobile/Web) ←→ Backend API ←→ AI Processing Engine
       ↑                           ↑                  ↑
   EEG Headset              Cognitive Models    Real-time Analytics
```

🚀 NeuroAccess GitHub Repository Structure

```
neuroaccess-horizonhacks/
│
├── README.md                          # Main project documentation
├── LICENSE                            # MIT License
├── requirements.txt                   # Python dependencies
├── setup.py                          # Installation script
│
├── frontend/                         # React/Flutter application
│   ├── src/
│   │   ├── components/
│   │   │   ├── CognitiveDashboard.js
│   │   │   ├── RealTimeEEGVisualization.js
│   │   │   └── XAIInsightsPanel.js
│   │   ├── pages/
│   │   │   ├── TeacherDashboard.js
│   │   │   ├── StudentView.js
│   │   │   └── AdminPanel.js
│   │   └── assets/
│   │       └── demo-screenshots/
│   ├── package.json
│   └── public/
│
├── backend/                          # Python AI backend
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py                   # FastAPI server
│   │   ├── models/
│   │   │   ├── eeg_processor.py
│   │   │   ├── cognitive_model.py
│   │   │   └── adaptive_engine.py
│   │   ├── utils/
│   │   │   ├── signal_processing.py
│   │   │   └── xai_explainer.py
│   │   └── data/
│   │       └── sample_eeg_data.csv
│   ├── requirements.txt
│   └── Dockerfile
│
├── mobile/                           # Flutter mobile app
│   ├── lib/
│   │   ├── screens/
│   │   ├── widgets/
│   │   └── services/
│   ├── pubspec.yaml
│   └── assets/
│
├── models/                           # Trained AI models
│   ├── gamma_classifier.h5
│   ├── attention_detector.pth
│   └── model_metadata.json
│
├── research/                         # Research and validation
│   ├── gamma_analysis.ipynb
│   ├── validation_study.pdf
│   └── performance_metrics.json
│
├── hardware/                         EEG integration
│   ├── neurosky_integration.py
│   ├── bluetooth_connector.py
│   └── calibration_tools/
│
├── docs/                             # Documentation
│   ├── API.md
│   ├── DEPLOYMENT.md
│   └── TROUBLESHOOTING.md
│
└── tests/                            # Test suite
    ├── test_eeg_processing.py
    ├── test_cognitive_model.py
    └── test_integration.py
```
