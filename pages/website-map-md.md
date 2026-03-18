# Website Map

## Mermaid Diagram

```mermaid
flowchart TD
    A[index] --> B[origin]
    B --> C[Science]
    B --> D[Syntax]
    B --> E[Disguise]
    B --> F[Method]
    C --> D
    C --> F
    D --> F
    F --> G[Roadmap]
    G --> H[Horizon]
    H --> I[Invitation]
    
    style A fill:#4caf50,stroke:#2e7d32,stroke-width:2px,color:#fff
    style I fill:#ffc107,stroke:#f57c00,stroke-width:2px,color:#000
    style E fill:#f44336,stroke:#c62828,stroke-width:2px,color:#fff
```

## ASCII Representation

```
┌─────────┐
│  index  │
└────┬────┘
     │
     ▼
┌─────────┐
│ origin  │
└────┬────┘
     │
┌─────────────────────┼─────────────────────┐
│                     │                     │
▼                     ▼                     ▼
┌─────────┐     ┌─────────┐           ┌─────────┐
│ Science │     │ Syntax  │           │Disguise │
└────┬────┘     └────┬────┘           └─────────┘
     │               │                 (dead end)
     │    ┌──────────┘
     │    │
     ▼    ▼                      ▼
     └──────┴─────►┌─────────┐
                   │ Method  │
                   └────┬────┘
                        │
                        ▼
                   ┌─────────┐
                   │ Roadmap │
                   └────┬────┘
                        │
                        ▼
                   ┌─────────┐
                   │ Horizon │
                   └────┬────┘
                        │
                        ▼
                   ┌────────────┐
                   │ Invitation │
                   └────────────┘
```

## Navigation Summary

### Page Flow
- **index** → origin
- **origin** → Science, Syntax, Disguise, Method
- **Science** → Syntax, Method
- **Syntax** → Method
- **Disguise** → (dead end)
- **Method** → Roadmap → Horizon → Invitation

### Page Types

| Type | Pages |
|------|-------|
| **[Start]** | index |
| **[Hub]** | origin, Method |
| **[Dead End]** | Disguise |
| **[Final]** | Invitation |

### Node Styling (Mermaid)
- **index**: Green (#4caf50)
- **Invitation**: Yellow/Amber (#ffc107)
- **Disguise**: Red (#f44336)

## Site Structure Analysis

### Key Paths
1. **Main Path**: index → origin → Method → Roadmap → Horizon → Invitation
2. **Science Path**: index → origin → Science → Method → Roadmap → Horizon → Invitation
3. **Syntax Path**: index → origin → Syntax → Method → Roadmap → Horizon → Invitation
4. **Dead End**: index → origin → Disguise

### Hub Pages
- **origin**: Central navigation hub with 4 outgoing connections
- **Method**: Convergence point where Science and Syntax paths merge

### Flow Characteristics
- Linear progression after Method page
- Multiple entry points to Method (direct from origin, via Science, via Syntax)
- Single dead-end branch (Disguise)
- Clear start (index) and end (Invitation) points