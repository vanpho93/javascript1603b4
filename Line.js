class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(diemA, diemB) {
        this.diemA = diemA;
        this.diemB = diemB;
    }

    getLength() {
        const x1 = this.diemA.x;
        const x2 = this.diemB.x;
        const y1 = this.diemA.y;
        const y2 = this.diemB.y;
        const dx = x1 - x2;
        const dy = y1 - y2;
        return Math.sqrt(dx*dx + dy*dy);
    }
}

const A = new Point(0, 0);
const B = new Point(1, 1);
const AB = new Line(A, B);
console.log(AB.getLength());
