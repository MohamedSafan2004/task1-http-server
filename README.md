# Raw HTTP Server (Node.js)

A small REST-style API built with only Node.js's built-in `http` module, with no external frameworks. It handles routing by hand, returns JSON with the correct `Content-Type` header, and uses proper HTTP status codes.

Built as part of the Elevvo Backend Internship (Task 1).

## What it demonstrates

- The HTTP request/response cycle (method, URL, headers, status code, body)
- Manual routing based on `req.method` and `req.url`
- JSON responses with `Content-Type: application/json`
- A `404 Not Found` fallback for unknown routes
- Reading system information with the built-in `os` module and `process`

## Requirements

- [Node.js](https://nodejs.org/) (v18 or newer recommended)

No `npm install` is needed because the project has no dependencies.

## Run

```bash
node server.js
```

The server starts on `http://localhost:3000`. Stop it with `Ctrl + C`, and restart it after any change to the code.

## Endpoints

| Method | Route         | Status | Description                                      |
| ------ | ------------- | ------ | ------------------------------------------------ |
| GET    | `/`           | 200    | Welcome message                                  |
| GET    | `/api/users`  | 200    | List of sample users                             |
| GET    | `/api/health` | 200    | Server uptime, OS platform, and ISO timestamp    |
| any    | other routes  | 404    | JSON error for routes that do not exist          |

### Example responses

`GET /`

```json
{ "message": "Welcome to the elevvo API" }
```

`GET /api/users`

```json
[
  { "id": "1", "name": "karem", "role": "dev" },
  { "id": "2", "name": "ali", "role": "dev" }
]
```

`GET /api/health`

```json
{
  "status": "ok",
  "uptime": 12.345,
  "platform": "win32",
  "timestamp": "2026-10-28T12:00:00.000Z"
}
```

`GET /abc` (unknown route)

```json
{ "error": "Route not found" }
```

## Testing

Open the URLs in a browser, use Postman, or use cURL. The `-i` flag also prints the status code and headers:

```bash
curl -i http://localhost:3000/api/health
curl -i http://localhost:3000/abc
```

On Windows PowerShell, use `curl.exe` instead of `curl`.

## Project structure

```
task1-http-server/
├── server.js
└── README.md
```
