"use strict";
const base_url = "http://localhost:9999/api";
test('adds 1 + 2 to equal 3', async () => {
    const username = "GIOSCOP";
    const password = "test";
    const res = await fetch(base_url + "/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password })
    });
    expect(res.status).toBe(200);
});
