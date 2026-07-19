package Assignments.Mocking&Stubbing.src.main.java.week2.mocking.test.java.week1.mocking.VerifyInterations.src.main.java.week2.verify;

public class MyService {
    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}