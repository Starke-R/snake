export function drawSnacks(ctx, snack) {
    ctx.fillStyle = "red";
    ctx.fillRect(snack.x, snack.y, snack.width, snack.height);
}