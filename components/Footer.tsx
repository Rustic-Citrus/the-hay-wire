export default function Footer() {
  return (
    <footer class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside>
        {/* Icon or logo could go here. */}
        <p>
          <span class="font-[Walter_Turncoat] text-lg">The Hay Wire</span>
          <br />
          Stories from a town with above average quirkiness.
        </p>
      </aside>
      <nav>
        <h6 class="footer-title">Information</h6>
        <div class="grid grid-flow-row gap-4">
          <p class="text-base">
            Hay-on-Wye is a small town that sits on the border between
            Breconshire, Herefordshire, and Radnorshire on the border between
            England and Wales. Its claim to fame is that it was the first book
            town in the world, and is now the home to the Hay Festival, which is
            one of the largest literary festivals in the world.
          </p>
          <p class="text-base">
            Hay is full of interesting people; the locals, and the "blow-ins".
            This project aims to capture the legends, stories, lives and general
            tall-tales of some of these people.
          </p>
          <p class="text-base">
            This idea is being developed by a group of locals. For more
            information,{" "}
            <a class="link" href="https://www.harryscurtis.com">
              visit harryscurtis.com
            </a>, and get in contact with Harry.
          </p>
        </div>
      </nav>
    </footer>
  );
}
