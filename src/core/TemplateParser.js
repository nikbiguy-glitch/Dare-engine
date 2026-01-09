export function parseTemplate(tpl, lists) {
  return tpl
    .replace(/%(\d+),(\d+)%/g, (_, a, b) =>
      Math.floor(Math.random() * (b - a + 1)) + Number(a)
    )
    .replace(/\{([^}]+)\}/g, (_, g) =>
      g.split('|')[Math.floor(Math.random() * g.split('|').length)]
    )
    .replace(/#(\w+)#/g, (_, k) =>
      (lists[k] || ['[' + k + ']'])[Math.floor(Math.random() * (lists[k] || [1]).length)]
    );
}
