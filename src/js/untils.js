export function elt(tagName, properties, ...children) {
    // Tạo element
    const ele = document.createElement(tagName);
  
    // Gắn thuộc tính lên trên element
    if (properties) {
      for (const prop of Object.entries(properties)) {
        const [key, value] = prop;
        ele[key] = value;
      }
    }
  
    // append chỉ chấp nhận là một element
    if (Array.isArray(children)) {
      children.forEach((child) => {
        ele.append(child);
      });
    } else {
      if (children) {
        ele.append(children);
      }
    }
  
    return ele;
  }
  