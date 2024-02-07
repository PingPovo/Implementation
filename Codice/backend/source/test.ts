const base_url = "http://localhost:9999/api";

test('Login corretto', async () => {
    const username = "matejdelcoco";
    const password = "matej10";

    const res = await fetch(base_url + "/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password })
    });
    expect(res.status).toBe(200);
});

test('Login non corretto, deve fallire e ritornare "unauthorized"', async () => {
    const username = "matejdelcoco";
    const password = "matej11";

    const res = await fetch(base_url + "/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password })
    });
    expect(res.status).toBe(403);
});