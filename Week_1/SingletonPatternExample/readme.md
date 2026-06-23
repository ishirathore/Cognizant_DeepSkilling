# Exercise 1: Implementing the Singleton Pattern

## 📌 Problem Statement
We need to ensure that a logging utility class in our application has only **one instance** throughout the application lifecycle. This guarantees consistent logging and avoids multiple logger objects writing differently.

---

## 📂 Folder Structure
SingletonPatternExample/
│
├── src/
│   ├── Logger.java
│   └── SingletonTest.java
└── README.md



Explanation:

private static Logger instance; → holds the single object.

private Logger() → prevents direct instantiation using new.

getInstance() → ensures only one object is created and reused.

log() → prints messages consistently.

Explanation:

Logger logger1 = Logger.getInstance(); → gets the single instance.

Logger logger2 = Logger.getInstance(); → returns the same instance.

(logger1 == logger2) → proves both references point to the same object.