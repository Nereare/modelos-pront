<?php
namespace Nereare\Pront;

class Notification {

  private \setasign\Fpdi\Fpdi    $pdf_base;

  /**
   * Instantialize PDF creation class.
   */
  public function __construct() {
    // Initiate Fpdi
    $this->pdf_base = new \setasign\Fpdi\Fpdi(
      "P",    // Portrait orientation
      "mm",   // Millimiter units - fluff the imperial system
      "A4"    // A4 page size
    );
    // Add custom fonts to Fpdi
    $this->pdf_base->AddFont(
      "Roboto Mono",
      "",
      "RobotoMono-Regular.php",
      str_replace("src", "", __DIR__) . "assets/fonts/"
    );
    $this->pdf_base->AddFont(
      "Roboto Mono",
      "B",
      "RobotoMono-Bold.php",
      str_replace("src", "", __DIR__) . "assets/fonts/"
    );
    $this->pdf_base->AddFont(
      "Roboto Mono",
      "I",
      "RobotoMono-Italic.php",
      str_replace("src", "", __DIR__) . "assets/fonts/"
    );
    $this->pdf_base->AddFont(
      "Roboto Mono",
      "BI",
      "RobotoMono-BoldItalic.php",
      str_replace("src", "", __DIR__) . "assets/fonts/"
    );
    // Set font
    $this->pdf_base->SetFont("Roboto Mono");
    $this->pdf_base->SetTextColor(255, 0, 0);
    $this->pdf_base->SetAutoPageBreak(false);
  }

  public function sharps_injury(
    string $today,    // YYYY-MM-DD format
    mixed  $hospital, // Indexes: "state", "city", "hospital", and "cnes"
    mixed  $accident  // Multilayered indexes:
                      // - "date"
                      // - "patient":
                      //   - "name"
                      //   - "dob"
                      //   - "age"
                      //   - "age_unit"
                      //   - "bio_sex"
                      //   - "preg"
                      //   - "race"
                      //   - "school"
                      //   - "mother"
                      // - "address":
                      //   - "state"
                      //   - "city"
                      //   - "shire"
                      //   - "street"
                      //   - "number"
                      //   - "extra"
                      //   - "cep"
                      //   - "zone"
                      // - "phone":
                      //   - "ddd"
                      //   - "number"
                      // - "work":
                      //   - "job"
                      //   - "status"
                      //   - "time"
                      //   - "t_unit"
                      //   - "company"
                      //   - "out"
                      // - "exposition":
                      //   - "type":
                      //     - "percutaneous"
                      //     - "mucosa"
                      //     - "skin"
                      //     - "skin_lesion"
                      //     - "other"
                      //     - "other_desc"
                      //   - "material"
                      //   - "context"
                      //   - "agent"
                      //   - "ppe":
                      //     - "gloves"
                      //     - "apron"
                      //     - "glasses"
                      //     - "mask"
                      //     - "faceshield"
                      //     - "boots"
                      //   - "hep_b"
                      //   - "source"
                      //   - "hiv"
                      //   - "plan":
                      //     - "no_proph"
                      //     - "refuse"
                      //     - "hepb_vax"
                      //     - "hepb_ig"
                      //     - "pep"
                      // - "notes"
  ): void {
    // Copy the base Fpdi object
    $sharps = $this->pdf_base;

    // Add SINAN pages (two copies)
    $sharps = $this->page_1($sharps, $today, $hospital, $accident);
    $sharps = $this->page_2($sharps, $today, $hospital, $accident);
    $sharps = $this->page_1($sharps, $today, $hospital, $accident);
    $sharps = $this->page_2($sharps, $today, $hospital, $accident);

    // Add PEP Form pages (one copy)
    $sharps = $this->pep_form($sharps, $today, $hospital, $accident);

    // Export PDF
    $sharps->Output();
  }

  private function page_1($pdf, $today, $hospital, $accident): \setasign\Fpdi\Fpdi {
    // Set SINAN source file
    $pdf->setSourceFile("assets/Acidente.pdf");
    // Add front page
    $pdf->AddPage();
    // Import page 1 (front)
    $page1 = $pdf->importPage(1);
    // Use imported first page (full A4 width = 210mm)
    $pdf->useImportedPage($page1, 0, 0, 210);

    // Fill front page
    // -- Block 1 - #1 through #7
    // ---- Notification date
    $pdf->SetXY(159.5, 66.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($today, 8, 1));
    $pdf->SetXY(164.5, 66.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($today, 9, 1));
    $pdf->SetXY(169.5, 66.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($today, 5, 1));
    $pdf->SetXY(174.5, 66.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($today, 6, 1));
    $pdf->SetXY(179.5, 66.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($today, 0, 1));
    $pdf->SetXY(184.5, 66.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($today, 1, 1));
    $pdf->SetXY(189.5, 66.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($today, 2, 1));
    $pdf->SetXY(194.5, 66.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($today, 3, 1));
    // ---- State
    $pdf->SetXY(21, 77);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($hospital->state, 0, 1));
    $pdf->SetXY(26, 77);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($hospital->state, 1, 1));
    // ---- City
    $pdf->SetXY(35, 77);
    $pdf->SetFontSize(12);
    $pdf->Write(0, iconv("UTF-8", "windows-1252", $hospital->city));
    // ---- Hospital
    $pdf->SetXY(25, 87.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, iconv("UTF-8", "windows-1252", $hospital->hospital));
    // ---- CNES
    $pdf->SetXY(121, 87.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($hospital->cnes, 0, 1));
    $pdf->SetXY(126, 87.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($hospital->cnes, 1, 1));
    $pdf->SetXY(131, 87.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($hospital->cnes, 2, 1));
    $pdf->SetXY(136, 87.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($hospital->cnes, 3, 1));
    $pdf->SetXY(141, 87.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($hospital->cnes, 4, 1));
    $pdf->SetXY(146, 87.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($hospital->cnes, 5, 1));
    $pdf->SetXY(151, 87.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($hospital->cnes, 6, 1));
    // ---- Accident date
    $pdf->SetXY(159.5, 87.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->date, 8, 1));
    $pdf->SetXY(164.5, 87.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->date, 9, 1));
    $pdf->SetXY(169.5, 87.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->date, 5, 1));
    $pdf->SetXY(174.5, 87.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->date, 6, 1));
    $pdf->SetXY(179.5, 87.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->date, 0, 1));
    $pdf->SetXY(184.5, 87.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->date, 1, 1));
    $pdf->SetXY(189.5, 87.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->date, 2, 1));
    $pdf->SetXY(194.5, 87.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->date, 3, 1));
    // -- Block 2 - #8 through #16
    // ---- Patient's name
    $pdf->SetXY(25, 98);
    $pdf->SetFontSize(12);
    $pdf->Write(0, iconv("UTF-8", "windows-1252", $accident->patient->name));
    // ---- Patient's date of birth
    $pdf->SetXY(159.5, 98);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->dob, 8, 1));
    $pdf->SetXY(164.5, 98);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->dob, 9, 1));
    $pdf->SetXY(169.5, 98);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->dob, 5, 1));
    $pdf->SetXY(174.5, 98);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->dob, 6, 1));
    $pdf->SetXY(179.5, 98);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->dob, 0, 1));
    $pdf->SetXY(184.5, 98);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->dob, 1, 1));
    $pdf->SetXY(189.5, 98);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->dob, 2, 1));
    $pdf->SetXY(194.5, 98);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->dob, 3, 1));
    // ---- Patient's age
    $pdf->SetXY(24, 108.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->age, 0, 1));
    $pdf->SetXY(29, 108.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->age, 1, 1));
    // ---- Patient's biological sex
    $pdf->SetXY(40.5, 106);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->patient->age_unit);
    // ---- Patient's age's unit
    $pdf->SetXY(83.5, 103.5);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->patient->bio_sex);
    // ---- Patient's pregnancy status
    $pdf->SetXY(152, 103.5);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->patient->preg);
    // ---- Patient's ethinicity
    $pdf->SetXY(195.8, 103.5);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->patient->race);
    // ---- Patient's schoolarity
    $pdf->SetXY(195.8, 114);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->patient->school);
    // ---- Patient's mother's name
    $pdf->SetXY(87, 129.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, iconv("UTF-8", "windows-1252", $accident->patient->mother));
    // -- Block 3 - #17 through #30
    // ---- Patient's address' state
    $pdf->SetXY(21, 140);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->address->state, 0, 1));
    $pdf->SetXY(26, 140);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->address->state, 1, 1));
    // ---- Patient's address' city
    $pdf->SetXY(35, 140);
    $pdf->SetFontSize(12);
    $pdf->Write(0, iconv("UTF-8", "windows-1252", $accident->address->city));
    // ---- Patient's address' city
    $pdf->SetXY(21, 148);
    $pdf->SetFontSize(12);
    $pdf->Write(0, iconv("UTF-8", "windows-1252", $accident->address->shire));
    // ---- Patient's address' street
    $pdf->SetXY(72.5, 148);
    $pdf->SetFontSize(12);
    $pdf->Write(0, iconv("UTF-8", "windows-1252", $accident->address->street));
    // ---- Patient's address' number
    $pdf->SetXY(21, 157);
    $pdf->SetFontSize(12);
    $pdf->Write(0, iconv("UTF-8", "windows-1252", $accident->address->number));
    // ---- Patient's address' number
    $pdf->SetXY(45, 157);
    $pdf->SetFontSize(12);
    $pdf->Write(0, iconv("UTF-8", "windows-1252", $accident->address->extra));
    // ---- Patient's address' CEP
    $pdf->SetXY(162.5, 167);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->address->cep, 0, 1));
    $pdf->SetXY(167.5, 167);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->address->cep, 1, 1));
    $pdf->SetXY(172.5, 167);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->address->cep, 2, 1));
    $pdf->SetXY(177.5, 167);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->address->cep, 3, 1));
    $pdf->SetXY(182.5, 167);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->address->cep, 4, 1));
    $pdf->SetXY(189, 167);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->address->cep, 5, 1));
    $pdf->SetXY(192, 167);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->address->cep, 6, 1));
    $pdf->SetXY(195, 167);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->address->cep, 7, 1));
    // ---- Patient's phone
    $pdf->SetXY(20, 175.5);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->phone->ddd);
    $pdf->SetXY(26, 175.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->phone->number, 0, 1));
    $pdf->SetXY(32, 175.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->phone->number, 1, 1));
    $pdf->SetXY(37, 175.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->phone->number, 2, 1));
    $pdf->SetXY(42, 175.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->phone->number, 3, 1));
    $pdf->SetXY(47, 175.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->phone->number, 4, 1));
    $pdf->SetXY(52, 175.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->phone->number, 5, 1));
    $pdf->SetXY(57, 175.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->phone->number, 6, 1));
    $pdf->SetXY(62, 175.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->phone->number, 7, 1));
    $pdf->SetXY(67, 175.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->phone->number, 8, 1));
    // ---- Patient's address' zone type
    $pdf->SetXY(119, 171.5);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->address->zone);
    // -- Block 4 - #31 through #45
    // ---- Patient's occupation
    $pdf->SetXY(21, 193.5);
    $pdf->SetFontSize(12);
    $pdf->Write(0, iconv("UTF-8", "windows-1252", $accident->work->job));
    // ---- Patient's occupation
    $pdf->SetXY(84.6, 199.1);
    $pdf->SetFontSize(10);
    $pdf->Write(0, substr($accident->work->status, 0, 1));
    $pdf->SetXY(88.6, 199.1);
    $pdf->SetFontSize(10);
    $pdf->Write(0, substr($accident->work->status, 1, 1));
    // ---- Patient's time in occupation
    $pdf->SetXY(161.5, 212);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->work->time, 0, 1));
    $pdf->SetXY(166.5, 212);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->work->time, 1, 1));
    $pdf->SetXY(177.5, 212);
    $pdf->SetFontSize(12);
    $pdf->Write(0, $accident->work->t_unit);
    // ---- Patient's occupation company
    $pdf->SetXY(89, 229);
    $pdf->SetFontSize(12);
    $pdf->Write(0, iconv("UTF-8", "windows-1252", $accident->work->company));
    // ---- Patient's occupation company's outsource status
    $pdf->SetXY(169.3, 262.7);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->work->out);

    return $pdf;
  }

  private function page_2($pdf, $today, $hospital, $accident): \setasign\Fpdi\Fpdi {
    // Set SINAN source file
    $pdf->setSourceFile("assets/Acidente.pdf");
    // Add back page
    $pdf->AddPage();
    // Import page 2 (back)
    $page2 = $pdf->importPage(2);
    // Use imported back page (full A4 width = 210mm)
    $pdf->useImportedPage($page2, 0, 0, 210);

    // Fill back page
    // -- Block 5 - #46 through #55
    // ---- Exposition type
    $pdf->SetXY(68.4, 16.5);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->type->percutaneous);
    $pdf->SetXY(68.4, 21);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->type->mucosa);
    $pdf->SetXY(106.4, 16.5);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->type->skin);
    $pdf->SetXY(106.4, 21);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->type->skin_lesion);
    $pdf->SetXY(148, 16);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->type->other);
    $pdf->SetXY(161, 15);
    $pdf->SetFontSize(10);
    $pdf->Write(0, iconv("UTF-8", "windows-1252", $accident->exposition->type->other_desc));
    // ---- Exposition material type
    $pdf->SetXY(192, 28.5);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->material);
    // ---- Exposition context
    $pdf->SetXY(189.5, 41);
    $pdf->SetFontSize(10);
    $pdf->Write(0, substr($accident->exposition->context, 0, 1));
    $pdf->SetXY(194, 41);
    $pdf->SetFontSize(10);
    $pdf->Write(0, substr($accident->exposition->context, 1, 1));
    // ---- Exposition agent
    $pdf->SetXY(192, 86.5);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->agent);
    // ---- Exposition PPE usage
    $pdf->SetXY(24, 107);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->ppe->gloves);
    $pdf->SetXY(45, 107);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->ppe->apron);
    $pdf->SetXY(69, 107);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->ppe->glasses);
    $pdf->SetXY(94, 107);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->ppe->mask);
    $pdf->SetXY(125, 107);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->ppe->faceshield);
    $pdf->SetXY(165, 107);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->ppe->boots);
    // ---- Patient's HepB vaccine status
    $pdf->SetXY(95, 116.5);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->hep_b);
    // ---- Exposition's known source
    $pdf->SetXY(99, 131.5);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->source);
    // ---- Exposition's source HIV status
    $pdf->SetXY(115, 144);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->hiv);
    // ---- Exposition plan
    $pdf->SetXY(22, 156);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->plan->no_proph);
    $pdf->SetXY(22, 161.5);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->plan->refuse);
    $pdf->SetXY(22, 167.5);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "2");
    $pdf->SetXY(84, 155.7);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "2");
    $pdf->SetXY(84, 163);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "2");
    $pdf->SetXY(84, 170.5);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->plan->hepb_ig);
    $pdf->SetXY(138, 155.7);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->plan->hepb_vax);
    $pdf->SetXY(138, 163.5);
    $pdf->SetFontSize(10);
    $pdf->Write(0, $accident->exposition->plan->pep);
    if ($accident->exposition->plan->pep == "1") {
      $pdf->SetXY(157, 164.3);
      $pdf->SetFontSize(8);
      $pdf->Write(0, "3TC+TDF+DTG");
    }
    // -- Block 6 - Complementary informations
    $pdf->SetXY(11, 212);
    $pdf->SetFontSize(10);
    $pdf->MultiCell(
      185,
      4.75,
      $accident->notes
    );
    // -- Block 7 - Final data
    // ---- Notification place
    $pdf->SetXY(21, 268);
    $pdf->SetFontSize(12);
    $pdf->Write(0, iconv("UTF-8", "windows-1252", $hospital->city));
    // ---- Notification place's CNES
    $pdf->SetXY(163, 268);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($hospital->cnes, 0, 1));
    $pdf->SetXY(168, 268);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($hospital->cnes, 1, 1));
    $pdf->SetXY(173, 268);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($hospital->cnes, 2, 1));
    $pdf->SetXY(178, 268);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($hospital->cnes, 3, 1));
    $pdf->SetXY(183, 268);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($hospital->cnes, 4, 1));
    $pdf->SetXY(188, 268);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($hospital->cnes, 5, 1));
    $pdf->SetXY(193, 268);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($hospital->cnes, 6, 1));

    return $pdf;
  }

  private function pep_form($pdf, $today, $hospital, $accident): \setasign\Fpdi\Fpdi {
    // Set PEP Form source file
    $pdf->setSourceFile("assets/Form_PEP.pdf");
    // Add front page
    $pdf->AddPage();
    // Import page 1 (front)
    $page_form1 = $pdf->importPage(1);
    // Use imported front page (full A4 width = 210mm)
    $pdf->useImportedPage($page_form1, 0, 0, 210);

    // Fill front page
    // -- Name
    $pdf->SetXY(8, 18);
    $pdf->SetFontSize(12);
    $pdf->Write(0, iconv("UTF-8", "windows-1252", $accident->patient->name));
    // -- CPF
    $pdf->SetXY(6.5, 40);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->cpf, 0, 1));
    $pdf->SetXY(13, 40);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->cpf, 1, 1));
    $pdf->SetXY(19.5, 40);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->cpf, 2, 1));
    $pdf->SetXY(26, 40);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->cpf, 3, 1));
    $pdf->SetXY(32.5, 40);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->cpf, 4, 1));
    $pdf->SetXY(39, 40);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->cpf, 5, 1));
    $pdf->SetXY(45.5, 40);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->cpf, 6, 1));
    $pdf->SetXY(52, 40);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->cpf, 7, 1));
    $pdf->SetXY(58.5, 40);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->cpf, 8, 1));
    $pdf->SetXY(65, 40);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->cpf, 9, 1));
    $pdf->SetXY(71.5, 40);
    $pdf->SetFontSize(12);
    $pdf->Write(0, substr($accident->patient->cpf, 10, 1));
    // -- DoB
    $d["y"] = substr($accident->patient->dob, 0, 4);
    $d["m"] = substr($accident->patient->dob, 5, 2);
    $d["d"] = substr($accident->patient->dob, 8, 2);
    $dob = "{$d["d"]}/{$d["m"]}/{$d["y"]}";
    $pdf->SetXY(82, 40);
    $pdf->SetFontSize(12);
    $pdf->Write(0, iconv("UTF-8", "windows-1252", $dob));
    // -- Context
    $pdf->SetXY(99, 49);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "X");
    // -- Accident date
    $d["y"] = substr($accident->date, 0, 4);
    $d["m"] = substr($accident->date, 5, 2);
    $d["d"] = substr($accident->date, 8, 2);
    $exp = "{$d["d"]}/{$d["m"]}/{$d["y"]}";
    $pdf->SetXY(108, 75);
    $pdf->SetFontSize(12);
    $pdf->Write(0, iconv("UTF-8", "windows-1252", $exp));
    // -- Assistance Source
    $pdf->SetXY(177, 75);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "X");
    // -- TDF+3TC
    $pdf->SetXY(70, 172);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "28");
    // -- DTG
    $pdf->SetXY(70, 240);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "28");
    // -- No's
    $pdf->SetXY(70, 178);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(70, 184);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(70, 190);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(70, 196);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(70, 202);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(140, 184);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(140, 190);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(105, 202);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(140, 202);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(140, 209);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(70, 216);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(70, 222);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(70, 234);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(105, 216);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(105, 222);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(105, 228);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(105, 234);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(140, 222);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(140, 228);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(180, 222);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(70, 246);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(105, 246);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(69, 251);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(69, 256.5);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(69, 262);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(69, 266);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(69, 271);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(104.5, 256.5);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(104.5, 266);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    $pdf->SetXY(140, 266);
    $pdf->SetFontSize(10);
    $pdf->Write(0, "--");
    // -- Today
    $pdf->SetXY(12, 281);
    $pdf->SetFontSize(10);
    $pdf->Write(0, substr($today, 8, 2));
    $pdf->SetXY(20, 281);
    $pdf->SetFontSize(10);
    $pdf->Write(0, substr($today, 5, 2));
    $pdf->SetXY(28, 281);
    $pdf->SetFontSize(10);
    $pdf->Write(0, substr($today, 2, 2));

    // Add back page
    $pdf->AddPage();
    // Import page 1 (back)
    $page_form2 = $pdf->importPage(2);
    // Use imported back page (full A4 width = 210mm)
    $pdf->useImportedPage($page_form2, 0, 0, 210);

    return $pdf;
  }
}
