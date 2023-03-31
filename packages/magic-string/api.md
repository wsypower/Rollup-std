## MagicString API

### constructor(string: string)

创建一个 MagicString 实例，其中 `string` 参数是要处理的源代码字符串。

### append(content: string): MagicString

在字符串的结尾插入 `content` 参数。

### appendRight(content: string): MagicString

在字符串的结尾插入 `content` 参数，并且在插入的内容之前添加一个新行。

### clone(): MagicString

创建当前 MagicString 实例的一个副本。

### generateMap(options?: GenerateMapOptions): SourceMap

生成并返回一个 SourceMap 对象，用于将 MagicString 实例中的位置映射到源代码中的位置。

### indent(indentStr: string | number = '    '): MagicString

缩进 MagicString 实例中的代码。

### indentLines(indentStr: string | number = '    '): MagicString

缩进 MagicString 实例中的每一行代码。

### insert(index: number, content: string): MagicString

在字符串的指定索引处插入 `content` 参数。

### move(start: number, end: number, index: number): MagicString

将字符串中从 `start` 到 `end` 的部分移动到指定的索引位置。

### overwrite(start: number, end: number, content: string, options?: OverwriteOptions): MagicString

用 `content` 参数替换字符串中从 `start` 到 `end` 的部分。

### prepend(content: string): MagicString

在字符串的开头插入 `content` 参数。

### prependLeft(content: string): MagicString

在字符串的开头插入 `content` 参数，并且在插入的内容之后添加一个新行。

### remove(start: number, end: number): MagicString

从字符串中删除从 `start` 到 `end` 的部分。

### slice(start: number, end?: number): string

返回字符串中从 `start` 到 `end` 的部分的副本。

### snip(start: number, end: number): MagicString

从字符串中删除从 `start` 到 `end` 的部分，并返回一个新的 MagicString 实例。

### toString(): string

返回 MagicString 实例的当前字符串表示。

### trim(): MagicString

删除 MagicString 实例中的前导和尾随空格。

### trimEnd(): MagicString

删除 MagicString 实例中的尾随空格。

### trimLines(): MagicString

删除 MagicString 实例中每一行的前导和尾随空格。
