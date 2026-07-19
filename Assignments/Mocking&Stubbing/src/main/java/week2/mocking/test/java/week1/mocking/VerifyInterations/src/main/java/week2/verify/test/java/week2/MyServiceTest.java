package Assignments.Mocking&Stubbing.src.main.java.week2.mocking.test.java.week1.mocking.VerifyInterations.src.main.java.week2.verify.test.java.week2;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Use mock in service
        MyService service = new MyService(mockApi);
        service.fetchData();

        // Step 3: Verify interaction
        verify(mockApi).getData();
    }
}