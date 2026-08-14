# DiffReceipt examples

Synthetic, credential-free pull requests demonstrating deterministic capability changes. Each PR adds exactly one review category and is analyzed by the immutable DiffReceipt Action runtime.

No example executes in production, contains credentials, or represents a real customer repository.

| Example | Capability |
|---|---|
| `example/network` | outbound network destination |
| `example/secret-name` | likely-secret environment name |
| `example/route` | external HTTP route |
| `example/database` | database write operation |
| `example/ci-permissions` | GitHub Actions permission escalation |
| `example/dependency` | dependency addition |
| `example/schedule` | scheduled workflow |
| `example/process` | child-process execution |

See the [hosted demo](https://diffreceipt.coachdaveswim.com/demo) or [quickstart](https://diffreceipt.coachdaveswim.com/quickstart.md).
