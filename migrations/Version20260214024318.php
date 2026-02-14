<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260214024318 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user ADD place_id INT DEFAULT NULL');
        $this->addSql(<<<'SQL'
            ALTER TABLE
              user
            ADD
              CONSTRAINT FK_8D93D649DA6A219 FOREIGN KEY (place_id) REFERENCES place (id)
        SQL);
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649DA6A219 ON user (place_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649DA6A219');
        $this->addSql('DROP INDEX UNIQ_8D93D649DA6A219 ON user');
        $this->addSql('ALTER TABLE user DROP place_id');
    }
}
