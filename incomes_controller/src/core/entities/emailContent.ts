
export class EmailContent {
    constructor(
        public from: string,
        public to: string,
        public title: string,
        public content: string
    ) { }


    get _from() {
        return this.from;
    }
    set _from(from: string) {
        this.from = from;
    }

    get _to() {
        return this.to;
    }
    set _to(to: string) {
        this.to = to;
    }

    get _title() {
        return this.title;
    }
    set _title(title: string) {
        this.title = title;
    }

    get _content() {
        return this.content;
    }
    set _content(content: string) {
        this.content = content;
    }

}