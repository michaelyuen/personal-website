---
title: React Snippet - Render Counter
description: Custom hook that displays the number of times a component has rendered
date: '2020-05-04'
tags:
- hooks
- optimization
- performance
- render-count
- react
absolute-note-number: 5
zettel: 5a
---



```javascript
function useRenderCounter() {
    const ref = React.useRef();
    React.useEffect(() => {
        ref.current.textContent = Number(ref.current.textContent || '0') + 1;
    });
    return (
        <span
            style={{
                backgroundColor: '#ccc',
                borderRadius: 4,
                padding: '2px 4px',
                fontSize: '0.8rem',
                margin: '0 6px',
                display: 'inline-block'
            }}
            ref={ref}
        />
    );
}
```



I discovered this from reading Kent C. Dodds' [How to Optimize Your Context Value](https://kentcdodds.com/blog/how-to-optimize-your-context-value/)



# References

1. https://kentcdodds.com/blog/how-to-optimize-your-context-value